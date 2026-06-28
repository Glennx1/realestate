import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "motion/react";
import {
  ArrowRight, Phone, MapPin, Mail, Instagram, Facebook, Linkedin, Youtube,
  Compass, Building2, Home, LandPlot, TrendingUp, MessageSquareQuote,
  ShieldCheck, FileText, Sparkles, Users, Quote, X,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import ctaImg from "@/assets/cta.jpg";

const privateHouseMain = "/properties/private-house-bts/gallery/h1p1.jpg";
const hulimauvuMain = "/properties/hulimavu/gallery/h2p1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Vathsa Reddy Developments — Strong Foundations, Lasting Impressions" },
      { name: "description", content: "Trusted real estate and construction company with 20+ years of experience in building construction, property development, buying, selling, and resale services." },
      { property: "og:title", content: "Shree Vathsa Reddy Developments" },
      { property: "og:description", content: "Quality construction and trusted real estate solutions with integrity and excellence." },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Shree Vathsa Reddy Developments" className="h-10 w-auto" />
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Shree <span className="text-gold">Vathsa</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-burgundy !py-3 !px-6">
          <span>Enquire Now</span>
        </a>
      </div>
    </header>
  );
}

function Reveal({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={hero} alt="Aerial view of a premium plotted development at dusk" className="h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">Shree Vathsa Reddy Developments — Est. 2004</span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-7 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]">
              Strong <em className="font-light italic text-champagne">Foundations,</em>
              <br /> Lasting Impressions.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shree Vathsa Reddy Developments is a trusted real estate and construction company backed by 20+ years of industry experience. We specialize in building construction, property development, and comprehensive real estate solutions.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-burgundy">
                <span>Explore Projects</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline-gold">
                <span>Contact Us</span>
              </a>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <div className="scroll-indicator relative h-14 w-px bg-border" />
      </div>

      {/* corner detail */}
      <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden text-right lg:block">
        <div className="eyebrow">Currently Developing</div>
        <div className="mt-2 font-serif text-xl text-foreground">Bengaluru · Mysuru · Hyderabad</div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: React.ReactNode; intro?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative overflow-hidden">
                <img src={about} alt="Modern luxury villa exterior at twilight" loading="lazy" width={1280} height={1600} className="h-[640px] w-full object-cover transition-transform duration-[1.6s] hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px w-12 bg-gold" />
                Crafted Since 2009
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-12">
            <SectionHeading
              eyebrow="About the Firm"
              title={<>Building <em className="font-light italic text-champagne">Better Spaces,</em> Stronger Communities.</>}
              intro="Shree Vathsa Reddy Developments is a trusted real estate and construction company backed by over 20 years of experience in the industry. We specialize in building construction, property development, buying, selling, and resale services. Our commitment to quality workmanship, transparent dealings, and customer satisfaction has helped us build lasting relationships with clients."
            />

            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-border pt-10">
                <div>
                  <div className="eyebrow">Vision</div>
                  <p className="mt-3 text-foreground/90">Building better spaces and stronger communities for the future.</p>
                </div>
                <div>
                  <div className="eyebrow">Mission</div>
                  <p className="mt-3 text-foreground/90">Delivering quality construction and trusted real estate solutions with integrity and excellence.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <a href="#projects" className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold transition-colors hover:text-champagne">
                Discover Our Portfolio <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: LandPlot, title: "Residential Layout Development", body: "RERA-approved gated plotted communities with full infrastructure, landscaping and clubhouse amenities — engineered for generations." },
  { icon: Building2, title: "Commercial Land Development", body: "Strategic commercial parcels along high-growth corridors, planned for retail, office and mixed-use occupiers of distinction." },
  { icon: Home, title: "Villa Projects", body: "Architect-led luxury villas with private gardens, designer interiors and premium fittings sourced from leading European houses." },
  { icon: Compass, title: "Plot Sales", body: "A curated inventory of clear-title residential and farm plots in the most sought-after micro-markets across South India." },
  { icon: TrendingUp, title: "Investment Advisory", body: "Independent, data-led counsel on land acquisition, holding strategy and disposition — tailored to your portfolio horizon." },
  { icon: MessageSquareQuote, title: "Property Consultation", body: "Personal consultation on legal due diligence, valuation, joint ventures and lifecycle management of premium real estate." },
];

function Services() {
  return (
    <section id="services" className="relative bg-surface/40 py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Six disciplines. <em className="font-light italic text-champagne">One</em> standard.</>}
          intro="From the first survey peg to the final handover, every service we offer is shaped by the same commitment to quality, transparency and lasting value."
        />

        <div className="mt-20 grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full p-10 transition-colors duration-500 hover:bg-background">
                <s.icon strokeWidth={1} className="h-10 w-10 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-8 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-8 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: "private-house",
    img: privateHouseMain,
    name: "Private House",
    location: "BTS Layout",
    status: "Completed",
    area: "Luxury Residential",
    desc: "A meticulously crafted private residence showcasing contemporary architecture, premium finishes, and thoughtful landscape design.",
    media: [
      { type: 'image', src: '/properties/private-house-bts/gallery/h1p1.jpg', alt: 'Private House - Gallery 1' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v1.MOV', alt: 'Private House - Tour 1' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v2.MOV', alt: 'Private House - Tour 2' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v3.MOV', alt: 'Private House - Tour 3' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v4.MOV', alt: 'Private House - Tour 4' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v5.MOV', alt: 'Private House - Tour 5' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v6.MOV', alt: 'Private House - Tour 6' },
      { type: 'video', src: '/properties/private-house-bts/videos/h1v7.MOV', alt: 'Private House - Tour 7' },
    ],
  },
  {
    id: "hulimavu",
    img: hulimauvuMain,
    name: "Hulimavu Residential",
    location: "Hulimavu",
    status: "Under Construction",
    area: "Premium Development",
    desc: "An exclusive residential development featuring thoughtfully designed units, premium amenities, and carefully curated public spaces.",
    media: [
      { type: 'image', src: '/properties/hulimavu/gallery/h2p1.png', alt: 'Hulimavu - Gallery 1' },
      { type: 'video', src: '/properties/hulimavu/videos/h2v1.mp4', alt: 'Hulimavu - Overview 1' },
      { type: 'video', src: '/properties/hulimavu/videos/h2v2.mp4', alt: 'Hulimavu - Overview 2' },
      { type: 'video', src: '/properties/hulimavu/videos/h2v3.mp4', alt: 'Hulimavu - Overview 3' },
      { type: 'video', src: '/properties/hulimavu/videos/h2v4.mp4', alt: 'Hulimavu - Overview 4' },
      { type: 'video', src: '/properties/hulimavu/videos/h2v5.mp4', alt: 'Hulimavu - Overview 5' },
    ],
  },
];

function ProjectGallery({ project, isOpen, onClose }: { project: typeof PROJECTS[0] | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 hover:bg-surface/60 rounded-full transition-colors"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6 text-gold" />
      </button>

      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="mb-8">
          <h2 className="font-serif text-4xl text-foreground mb-2">{project.name}</h2>
          <p className="text-muted-foreground">{project.location}</p>
        </div>

        {project.media.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>Gallery media coming soon. Add images and videos to:</p>
            <p className="mt-2 text-sm text-foreground/60">
              {`src/assets/properties/${project.id === 'private-house' ? 'private-house-bts' : 'hulimavu'}/`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.media.map((item, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover bg-black"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section id="projects" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Featured Properties"
            title={<>Addresses of <em className="font-light italic text-champagne">consequence.</em></>}
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <span className="bg-burgundy px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.3em] text-ivory">{p.status}</span>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="eyebrow !text-champagne">{p.location}</div>
                    <h3 className="mt-3 font-serif text-3xl text-foreground">{p.name}</h3>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6 border-t border-border pt-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.area}</span>
                  <button
                    onClick={() => {
                      setSelectedProject(p);
                      setGalleryOpen(true);
                    }}
                    className="flex items-center gap-2 text-gold hover:text-champagne transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.25em]">Gallery</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectGallery project={selectedProject} isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </section>
  );
}

const REASONS = [
  { icon: ShieldCheck, title: "Trusted Development", body: "Fifteen years of on-time, as-promised delivery across every category we operate in." },
  { icon: FileText, title: "Transparent Documentation", body: "Clear titles, RERA-registered projects and a documentation room you are welcome to audit." },
  { icon: MapPin, title: "Prime Locations", body: "Acquisitions only along proven and emerging growth corridors of South India." },
  { icon: Sparkles, title: "Quality Infrastructure", body: "Engineered roads, underground utilities, designed landscape — the spine of every layout we build." },
  { icon: TrendingUp, title: "Investment Value", body: "Land that has historically out-performed benchmark indices over a five-year horizon." },
  { icon: Users, title: "Customer First", body: "A dedicated relationship manager from first visit through registration and beyond." },
];

function WhyChoose() {
  return (
    <section id="properties" className="relative bg-surface/40 py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The case for <em className="font-light italic text-champagne">Shree Vathsa.</em></>}
          intro="Six commitments we have honoured for every customer, on every project, since the day we began."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="group relative h-full bg-background p-10 transition-colors duration-500 hover:bg-wine/40">
                <div className="flex items-center gap-5">
                  <span className="text-xs tracking-[0.3em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-10 bg-gold/60" />
                  <r.icon strokeWidth={1} className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-foreground">{r.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { value: 500, label: "Happy Customers" },
  { value: 30, label: "Projects Delivered" },
  { value: 20, label: "Years of Experience" },
  { value: 100, label: "Acres Developed" },
];

function Stats() {
  return (
    <section className="relative border-y border-border bg-background py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center lg:border-r lg:border-border lg:last:border-r-0">
                <div className="font-serif text-6xl leading-none text-foreground sm:text-7xl">
                  <Counter to={s.value} />
                </div>
                <div className="mt-5 text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section className="relative h-[640px] w-full overflow-hidden">
      <img src={ctaImg} alt="Luxury gated community at dusk" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-12">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">A Personal Invitation</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]">
              Let's build your <em className="font-light italic text-champagne">future</em> together.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Visit one of our living projects with a private host, or speak with our advisory team about a property that suits you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#contact" className="btn-burgundy"><span>Book a Site Visit</span><ArrowRight className="relative z-10 h-4 w-4" /></a>
              <a href="tel:+918012345678" className="btn-outline-gold"><Phone className="relative z-10 h-4 w-4" /><span>Call Now</span></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-surface/40 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get in Touch"
              title={<>Begin a quiet <em className="font-light italic text-champagne">conversation.</em></>}
              intro="Share a few details and a member of our advisory team will arrange a private call or site visit at your convenience."
            />
            <Reveal delay={0.2}>
              <div className="mt-12 space-y-8 border-t border-border pt-10">
                <div className="flex items-start gap-5">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <div>
                    <div className="eyebrow">Head Office</div>
                    <p className="mt-2 text-foreground/90">#12 1st Cross, 2nd Main Samrat Layout,<br />Arekere, BG Road, Bangalore-76</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <div>
                    <div className="eyebrow">Phone</div>
                    <p className="mt-2 text-foreground/90">Krishna Reddy: 9448353062<br />Pujitha Reddy: 8296038841<br />WhatsApp: 8296038841</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Mail className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                  <div>
                    <div className="eyebrow">Email</div>
                    <p className="mt-2 text-foreground/90">svrdevelopments.in@gmail.com</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form onSubmit={(e) => e.preventDefault()} className="border border-border bg-background p-8 sm:p-12">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full Name" name="name" />
                  <Field label="Email Address" name="email" type="email" />
                  <Field label="Phone Number" name="phone" type="tel" />
                  <Field label="Project of Interest" name="project" />
                </div>
                <div className="mt-6">
                  <Field label="How may we assist you?" name="message" textarea />
                </div>
                <button type="submit" className="btn-burgundy mt-10 w-full sm:w-auto">
                  <span>Submit Enquiry</span>
                  <ArrowRight className="relative z-10 h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "peer mt-2 w-full border-0 border-b border-border bg-transparent px-0 pb-3 pt-1 text-foreground placeholder-transparent outline-none transition-colors focus:border-gold";
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input type={type} name={name} className={cls} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-serif text-3xl tracking-tight text-foreground">
              Shree <span className="text-gold">Vathsa</span> Reddy
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Trusted real estate and construction solutions — Strong Foundations, Lasting Impressions. 20+ years of excellence and integrity.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social link" className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow">Navigate</div>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="text-foreground/80 transition-colors hover:text-gold">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow">Services</div>
            <ul className="mt-6 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title} className="text-foreground/80 transition-colors hover:text-gold">{s.title}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow">Visit Us</div>
            <p className="mt-6 text-sm text-foreground/80">
              #12 1st Cross, 2nd Main Samrat Layout<br />Arekere, BG Road, Bangalore-76<br />India
            </p>
            <a href="https://maps.app.goo.gl/PgwD7ArSrv1sEqHB8" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold hover:text-champagne">
              Google Maps <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Shree Vathsa Ventures Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">RERA Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
