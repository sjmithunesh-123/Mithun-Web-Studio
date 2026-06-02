import { useState } from "react";
import { whatsappLink, CONTACT } from "@/lib/contact";
import {
  MessageCircle,
  ArrowRight,
  Code2,
  Layout,
  User,
  Briefcase,
  Wrench,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Sparkles,
  CheckCircle2,
  Star,
  ExternalLink,
} from "lucide-react";


/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden pt-24 bg-contain bg-cover bg-center bg-no-repeat"
  style={{
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/developer-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "80% center",
  backgroundRepeat: "no-repeat",
}}
>
      
      <div className="pointer-events-none absolute inset-0 -z-10">
      
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for freelance projects
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Professional Websites for Modern Businesses <span className="text-gradient">Building Websites That Grow Your Business.</span> 
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            <span className="text-foreground font-medium">Hi, I'm Mithunesh S - a freelance web developer helping businesses, startups, and creators build professional websites that drive growth and create a strong online presence.</span>
            
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-medium text-whatsapp-foreground shadow-glow transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium text-foreground transition-colors hover:bg-card"
            >
              View Work
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["50+ Projects", "5★ Rated", "24h Response"].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
         
      
            
                
                
                
              
             
              
              <div className="absolute -bottom-6 -right-6 animate-float rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-card">
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp">
                    <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  </span>
                  <div>
                    <div className="font-medium">Let's talk</div>
                    <div className="text-xs text-muted-foreground">Replies in minutes</div>
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "On-time Delivery" },
  ];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel icon={User}>About Me</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Turning ideas into <span className="text-gradient">digital experiences</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              I'm a freelance web developer focused on building polished,
              high-performance websites that help businesses look credible and
              win customers online. From single landing pages to full business
              websites, I handle design, development, and deployment end-to-end.
            </p>
            <p className="mt-4 text-muted-foreground">
              My stack: <span className="text-foreground">React, Next.js, TypeScript,
              Tailwind CSS, Node.js</span>. My priority: clean code, fast load
              times, and designs that actually convert visitors into customers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom websites built with modern frameworks — fast, scalable, and secure.",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    desc: "High-converting landing pages designed to drive signups, sales, and leads.",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    desc: "Stunning portfolios that showcase your work and personal brand professionally.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Complete business sites with services, contact, and SEO ready out of the box.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Updates, performance tuning, bug fixes, and feature additions — ongoing care.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Revamp",
    desc: "Modernize an outdated site with a clean, conversion-focused redesign.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-border/40 bg-card/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel icon={Briefcase}>Services</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            What I can build <span className="text-gradient">for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end web development services tailored to your goals and budget.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href={whatsappLink(
                  `Hello Mithunesh, I'm interested in your "${s.title}" service.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
              >
                Discuss this <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const projects = [
  {
    title: "Lumen — SaaS Landing",
    tag: "Landing Page",
    desc: "High-converting marketing site for an AI productivity startup.",
    gradient: "from-blue-500/40 to-purple-500/40",
  },
  {
    title: "Harbor Café",
    tag: "Business Website",
    desc: "Multi-page restaurant website with online menu and reservations.",
    gradient: "from-cyan-500/40 to-blue-600/40",
  },
  {
    title: "Aria — Designer Portfolio",
    tag: "Portfolio",
    desc: "Minimal animated portfolio showcasing design case studies.",
    gradient: "from-indigo-500/40 to-blue-500/40",
  },
  {
    title: "Northwind Consulting",
    tag: "Business Website",
    desc: "Corporate site with services, team, and lead-capture forms.",
    gradient: "from-sky-500/40 to-indigo-600/40",
  },
  {
    title: "Pulse Fitness",
    tag: "Landing Page",
    desc: "Bold gym landing page with class schedules and signup CTAs.",
    gradient: "from-blue-600/40 to-violet-500/40",
  },
  {
    title: "Mira Studio",
    tag: "Portfolio",
    desc: "Photography portfolio with masonry gallery and lightbox.",
    gradient: "from-teal-500/40 to-blue-500/40",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel icon={Layout}>Portfolio</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Recent <span className="text-gradient">work</span>
            </h2>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Start your project →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-5xl font-bold text-foreground/30">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="flex items-center gap-2 font-semibold">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={whatsappLink(`Hello Mithunesh, can I see a live demo of "${p.title}"?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    <ExternalLink className="h-3 w-3" /> Live Demo
                  </a>
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3 w-3" /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    name: "NIRMAL GM.",
    role: "Founder, Bloom Studio",
    quote:
      "Mithunesh delivered our landing page in under a week. Conversions jumped 3x in the first month. Highly recommended.",
  },
  {
    name: "CHANDRU .",
    role: "CEO, Northwind Consulting",
    quote:
      "Smooth communication, clean code, and a beautiful end result. He genuinely cares about the outcome.",
  },
  {
    name: "Sara K.",
    role: "Designer & Illustrator",
    quote:
      "My portfolio finally feels like *me*. Fast, modern, and the animations are chef's kiss. Worth every rupee.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border/40 bg-card/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel icon={Star}>Testimonials</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            What clients <span className="text-gradient">say</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      href: whatsappLink(),
      accent: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      href: "tel:+916382100601",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India · Remote",
      href: "https://maps.app.goo.gl/EUzZL19raaxvAoKV7",
    },
  ];

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Mithunesh, my name is ${form.name} (${form.email}) and my phone number is ${form.phone}. ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel icon={Mail}>Get in touch</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Have a project? <span className="text-gradient">Let's build it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fastest way to reach me is WhatsApp. I usually reply within a few hours.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-medium text-whatsapp-foreground shadow-glow transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            Message me on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card sm:p-8"
          >
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill the form — it opens WhatsApp with your message pre-filled.
            </p>
            <div className="mt-6 grid gap-4">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                type="tel"
                placeholder="Your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Send via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 ${
                  i.accent
                    ? "border-whatsapp/40 bg-whatsapp/10 hover:border-whatsapp"
                    : "border-border/70 bg-card/60 hover:border-primary/50"
                }`}
              >
                <i.icon
                  className={`h-6 w-6 ${i.accent ? "text-whatsapp" : "text-primary"}`}
                />
                <div className="mt-4 text-sm text-muted-foreground">{i.label}</div>
                <div className="mt-1 font-medium">{i.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
   <footer className="border-t border-border/40 bg-background py-10">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-4">

      <div>
        <h3 className="text-xl font-bold text-primary">
          Mithunesh S
        </h3>

        <p className="mt-3 text-sm text-muted-foreground">
          Professional Web Developer creating modern,
          responsive and business-focused websites.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">
          Quick Links
        </h4>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">
          Services
        </h4>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Website Development</li>
          <li>Landing Pages</li>
          <li>Portfolio Websites</li>
          <li>Business Websites</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">
          Contact
        </h4>

        <div className="space-y-2 text-sm">
          <a
  href="https://wa.me/916382100601"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-green-400"
>
  <MessageCircle size={16} />
  WhatsApp
</a>

         <a
  href="mailto:sjmithunesh@gmail.com"
  className="flex items-center gap-2 hover:text-primary"
>
  <Mail size={16} />
  Email
</a>

         <a
  href=
  "https://www.linkedin.com/in/mithunesh-s-9791b9345/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-primary"
>
  <Linkedin size={16} />
  LinkedIn
</a>

          <a
            href="https://github.com/sjmithunesh-123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary"
          >
            <Github size={16} />
            Github
          </a>
          
        </div>
      </div>

    </div>

    <div className="mt-10 border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Mithunesh S. All Rights Reserved.
    </div>

  </div>
</footer>
  );
}

/* ---------------- Shared ---------------- */
function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {children}
    </div>
  );
}
