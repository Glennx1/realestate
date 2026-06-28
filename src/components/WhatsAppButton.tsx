const WHATSAPP_NUMBER = "918296038841"; // country code (91 = India) + number, no spaces or symbols
const WHATSAPP_MESSAGE = "Hi, I'm interested in learning more about your properties.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0C7.165 0 0 7.163 0 16c0 3.06.857 5.92 2.347 8.354L.06 32l7.86-2.236A15.93 15.93 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0zm0 29.27a13.18 13.18 0 0 1-6.987-1.998l-.501-.299-5.21 1.482 1.464-5.214-.327-.535A13.21 13.21 0 0 1 2.73 16c0-7.32 5.95-13.27 13.274-13.27S29.27 8.68 29.27 16 23.328 29.27 16.004 29.27z" />
        <path d="M23.215 19.197c-.398-.2-2.357-1.164-2.722-1.297-.365-.133-.63-.2-.896.2-.265.398-1.027 1.296-1.26 1.562-.232.265-.464.299-.862.1-.398-.2-1.68-.62-3.2-1.978-1.183-1.054-1.98-2.355-2.212-2.753-.232-.398-.025-.613.174-.812.2-.2.398-.46.598-.69.2-.232.265-.398.398-.663.133-.265.066-.498-.033-.698-.1-.2-.896-2.157-1.227-2.953-.327-.79-.66-.684-.896-.696l-.764-.013c-.232 0-.61.087-.93.428-.32.34-1.218 1.19-1.218 2.9 0 1.71 1.252 3.366 1.42 3.6.166.232 2.314 3.53 5.61 4.81 3.295 1.28 3.295.853 3.886.797.59-.055 1.917-.78 2.19-1.534.265-.755.265-1.398.186-1.534-.08-.133-.299-.232-.696-.43z" />
      </svg>
    </a>
  );
}
