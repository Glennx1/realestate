import fs from "node:fs";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, extname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serverPath = new URL(`file://${resolve(__dirname, "./dist/server/server.js")}`);
const clientRoot = resolve(__dirname, "./dist/client");

const serverEntry = await import(serverPath.href);
const handler = serverEntry.default;

const preferredPort = Number(process.env.PORT ?? 4173);
let port = Number.isFinite(preferredPort) && preferredPort > 0 ? preferredPort : 4173;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".map": "application/octet-stream",
};

function serveStatic(req, res) {
  const url = new URL(req.url ?? "/", `http://localhost:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const filePath = resolve(clientRoot, pathname.slice(1));

  if (!filePath.startsWith(clientRoot)) {
    return false;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return false;
  }

  const type = mimeTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream";
  res.writeHead(200, { "Content-Type": type });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

function createServer(currentPort) {
  const server = http.createServer(async (req, res) => {
    try {
      if (req.method === "GET" && serveStatic(req, res)) {
        return;
      }

      const request = new Request(`http://localhost:${currentPort}${req.url ?? "/"}`, {
        method: req.method,
        headers: req.headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req : null,
      });

      const response = await handler.fetch(request, undefined, undefined);
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()));

      const body = response.body;
      if (body) {
        const reader = body.getReader();
        const decoder = new TextDecoder();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(decoder.decode(value));
        }
      }
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end("Internal Server Error");
    }
  });

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const nextPort = currentPort + 1;
      console.warn(`Port ${currentPort} is already in use. Trying port ${nextPort}...`);
      createServer(nextPort);
    } else {
      console.error(error);
      process.exit(1);
    }
  });

  server.listen(currentPort, () => {
    port = currentPort;
    console.log(`Local SSR server running at http://localhost:${currentPort}`);
  });
}

createServer(port);
