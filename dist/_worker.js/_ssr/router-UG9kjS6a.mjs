import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MessageCircle, X, a as Menu, b as Mail, L as Linkedin, G as Github, S as Star, B as Briefcase, C as CodeXml, P as PanelsTopLeft, U as User, W as Wrench, c as Sparkles, A as ArrowRight, E as ExternalLink, d as Phone, e as MapPin, f as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-Babz2r9w.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const WHATSAPP_MESSAGE = "Hello Mithunesh, I visited your website and would like to discuss a project.";
const whatsappLink = (msg = WHATSAPP_MESSAGE) => `https://wa.me/${6382100601}?text=${encodeURIComponent(msg)}`;
const CONTACT = {
  email: "sjmithunesh@gmail.com",
  github: "https://github.com/sjmithunesh-123"
};
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass border-b border-border/50" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary font-display text-lg font-bold text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Logo" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-semibold", children: [
              "Mithun Web Studio",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              activeOptions: { exact: true },
              className: "text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary data-[status=active]:font-medium",
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-medium text-whatsapp-foreground transition-transform hover:scale-105 md:inline-flex",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4", fill: "currentColor", strokeWidth: 0 }),
                "WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "md:hidden text-foreground",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass border-t border-border/50 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 px-6 py-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              activeOptions: { exact: true },
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-primary",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-medium text-whatsapp-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4", fill: "currentColor", strokeWidth: 0 }),
                "Chat on WhatsApp"
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative flex min-h-screen items-center overflow-hidden pt-24 bg-contain bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/developer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "80% center",
        backgroundRepeat: "no-repeat"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
              "Available for freelance projects"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl", children: [
              "Professional Websites for Modern Businesses ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Building Websites That Grow Your Business." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Hi, I'm Mithunesh S - a freelance web developer helping businesses, startups, and creators build professional websites that drive growth and create a strong online presence." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: whatsappLink(),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-medium text-whatsapp-foreground shadow-glow transition-transform hover:scale-105",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", fill: "currentColor", strokeWidth: 0 }),
                    "Chat on WhatsApp",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/portfolio",
                  className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium text-foreground transition-colors hover:bg-card",
                  children: "View Work"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground", children: ["50+ Projects", "5★ Rated", "24h Response"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
              s
            ] }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative animate-fade-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-6 animate-float rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4", fill: "currentColor", strokeWidth: 0 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Let's talk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Replies in minutes" })
            ] })
          ] }) }) })
        ] })
      ]
    }
  );
}
function About() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "On-time Delivery" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2 md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { icon: User, children: "About Me" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: [
        "Turning ideas into ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "digital experiences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground", children: "I'm a freelance web developer focused on building polished, high-performance websites that help businesses look credible and win customers online. From single landing pages to full business websites, I handle design, development, and deployment end-to-end." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground", children: [
        "My stack: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "React, Next.js, TypeScript, Tailwind CSS, Node.js" }),
        ". My priority: clean code, fast load times, and designs that actually convert visitors into customers."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card transition-transform hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) }) });
}
const services = [
  {
    icon: CodeXml,
    title: "Website Development",
    desc: "Custom websites built with modern frameworks — fast, scalable, and secure."
  },
  {
    icon: PanelsTopLeft,
    title: "Landing Page Design",
    desc: "High-converting landing pages designed to drive signups, sales, and leads."
  },
  {
    icon: User,
    title: "Portfolio Websites",
    desc: "Stunning portfolios that showcase your work and personal brand professionally."
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Complete business sites with services, contact, and SEO ready out of the box."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Updates, performance tuning, bug fixes, and feature additions — ongoing care."
  },
  {
    icon: Sparkles,
    title: "UI/UX Revamp",
    desc: "Modernize an outdated site with a clean, conversion-focused redesign."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "border-y border-border/40 bg-card/20 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { icon: Briefcase, children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: [
        "What I can build ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "for you" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "End-to-end web development services tailored to your goals and budget." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: whatsappLink(
                `Hello Mithunesh, I'm interested in your "${s.title}" service.`
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100",
              children: [
                "Discuss this ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      },
      s.title
    )) })
  ] }) });
}
const projects = [
  {
    title: "Lumen — SaaS Landing",
    tag: "Landing Page",
    desc: "High-converting marketing site for an AI productivity startup.",
    gradient: "from-blue-500/40 to-purple-500/40"
  },
  {
    title: "Harbor Café",
    tag: "Business Website",
    desc: "Multi-page restaurant website with online menu and reservations.",
    gradient: "from-cyan-500/40 to-blue-600/40"
  },
  {
    title: "Aria — Designer Portfolio",
    tag: "Portfolio",
    desc: "Minimal animated portfolio showcasing design case studies.",
    gradient: "from-indigo-500/40 to-blue-500/40"
  },
  {
    title: "Northwind Consulting",
    tag: "Business Website",
    desc: "Corporate site with services, team, and lead-capture forms.",
    gradient: "from-sky-500/40 to-indigo-600/40"
  },
  {
    title: "Pulse Fitness",
    tag: "Landing Page",
    desc: "Bold gym landing page with class schedules and signup CTAs.",
    gradient: "from-blue-600/40 to-violet-500/40"
  },
  {
    title: "Mira Studio",
    tag: "Portfolio",
    desc: "Photography portfolio with masonry gallery and lightbox.",
    gradient: "from-teal-500/40 to-blue-500/40"
  }
];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { icon: PanelsTopLeft, children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: [
          "Recent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "work" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: whatsappLink(),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm text-primary hover:underline",
          children: "Start your project →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-foreground/30", children: p.title.charAt(0) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur", children: p.tag })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "flex items-center gap-2 font-semibold", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: whatsappLink(`Hello Mithunesh, can I see a live demo of "${p.title}"?`),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                    " Live Demo"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: CONTACT.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1 rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3 w-3" }),
                    " Source"
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const testimonials = [
  {
    name: "NIRMAL GM.",
    role: "Founder, Bloom Studio",
    quote: "Mithunesh delivered our landing page in under a week. Conversions jumped 3x in the first month. Highly recommended."
  },
  {
    name: "CHANDRU .",
    role: "CEO, Northwind Consulting",
    quote: "Smooth communication, clean code, and a beautiful end result. He genuinely cares about the outcome."
  },
  {
    name: "Sara K.",
    role: "Designer & Illustrator",
    quote: "My portfolio finally feels like *me*. Fast, modern, and the animations are chef's kiss. Worth every rupee."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "border-y border-border/40 bg-card/20 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { icon: Star, children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: [
        "What clients ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "say" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4", fill: "currentColor", strokeWidth: 0 }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-semibold text-primary-foreground", children: t.name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
function Contact() {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      href: whatsappLink(),
      accent: true
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      href: "tel:+916382100601"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India · Remote",
      href: "https://maps.app.goo.gl/EUzZL19raaxvAoKV7"
    }
  ];
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Mithunesh, my name is ${form.name} (${form.email}) and my phone number is ${form.phone}. ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-hero opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { icon: Mail, children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold sm:text-5xl", children: [
          "Have a project? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Let's build it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Fastest way to reach me is WhatsApp. I usually reply within a few hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: whatsappLink(),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-medium text-whatsapp-foreground shadow-glow transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", fill: "currentColor", strokeWidth: 0 }),
              "Message me on WhatsApp",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "rounded-2xl border border-border/70 bg-card/60 p-6 shadow-card sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Send a message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Fill the form — it opens WhatsApp with your message pre-filled." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    required: true,
                    type: "text",
                    placeholder: "Your name",
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    required: true,
                    type: "tel",
                    placeholder: "Your phone number",
                    value: form.phone,
                    onChange: (e) => setForm({ ...form, phone: e.target.value }),
                    className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    required: true,
                    type: "email",
                    placeholder: "Your email",
                    value: form.email,
                    onChange: (e) => setForm({ ...form, email: e.target.value }),
                    className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 5,
                    placeholder: "Tell me about your project...",
                    value: form.message,
                    onChange: (e) => setForm({ ...form, message: e.target.value }),
                    className: "w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]",
                    children: [
                      "Send via WhatsApp",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: i.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `group rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 ${i.accent ? "border-whatsapp/40 bg-whatsapp/10 hover:border-whatsapp" : "border-border/70 bg-card/60 hover:border-primary/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                i.icon,
                {
                  className: `h-6 w-6 ${i.accent ? "text-whatsapp" : "text-primary"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm text-muted-foreground", children: i.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium", children: i.value })
            ]
          },
          i.label
        )) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-background py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: "Mithunesh S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Professional Web Developer creating modern, responsive and business-focused websites." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/portfolio", children: "Portfolio" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Website Development" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Landing Pages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Portfolio Websites" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Business Websites" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/916382100601",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 hover:text-green-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
                "WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:sjmithunesh@gmail.com",
              className: "flex items-center gap-2 hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
                "Email"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/mithunesh-s-9791b9345/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }),
                "LinkedIn"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://github.com/sjmithunesh-123",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 16 }),
                "Github"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-t border-border/30 pt-6 text-center text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mithunesh S. All Rights Reserved."
    ] })
  ] }) });
}
function SectionLabel({
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
    children
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: whatsappLink(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant animate-pulse-ring transition-transform hover:scale-110",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-7 w-7", fill: "currentColor", strokeWidth: 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Chat on WhatsApp" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mithunesh S — Freelance Web Developer" },
      {
        name: "description",
        content: "Freelance web developer building modern, fast, SEO-friendly websites. Chat on WhatsApp."
      },
      { name: "author", content: "Mithunesh S" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mithunesh S" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] }) });
}
const $$splitComponentImporter$5 = () => import("./testimonials-BiQeZ2w1.mjs");
const Route$5 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Testimonials — Mithunesh S | Client Reviews"
    }, {
      name: "description",
      content: "Read what clients say about working with Mithunesh S — freelance web developer delivering modern, high-converting websites."
    }, {
      property: "og:title",
      content: "Testimonials — Mithunesh S"
    }, {
      property: "og:description",
      content: "Client reviews and success stories from freelance web projects."
    }, {
      property: "og:url",
      content: "/testimonials"
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services-B6thvRAj.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Mithunesh S | Web Development & Design"
    }, {
      name: "description",
      content: "Website development, landing pages, portfolios, business websites, and maintenance. End-to-end freelance web services tailored to your goals."
    }, {
      property: "og:title",
      content: "Services — Mithunesh S"
    }, {
      property: "og:description",
      content: "End-to-end web development services: websites, landing pages, portfolios, business sites, and maintenance."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-uIL4TIPO.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — Mithunesh S | Recent Web Projects"
    }, {
      name: "description",
      content: "Selected freelance projects by Mithunesh S — landing pages, business websites, and portfolios built with modern web tech."
    }, {
      property: "og:title",
      content: "Portfolio — Mithunesh S"
    }, {
      property: "og:description",
      content: "Recent freelance web development work: landing pages, business sites, and portfolios."
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CnTBoHC2.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Mithunesh S | Freelance Web Developer"
    }, {
      name: "description",
      content: "Get in touch with Mithunesh S for freelance web development. Chat on WhatsApp, email, or connect on LinkedIn — replies within a few hours."
    }, {
      property: "og:title",
      content: "Contact — Mithunesh S"
    }, {
      property: "og:description",
      content: "Reach out for a freelance web project — fastest reply on WhatsApp."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Bc8OV5XL.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Mithunesh S | Freelance Web Developer"
    }, {
      name: "description",
      content: "Learn about Mithunesh S — a freelance web developer crafting modern, high-performance websites with React, Next.js, and Tailwind CSS."
    }, {
      property: "og:title",
      content: "About — Mithunesh S"
    }, {
      property: "og:description",
      content: "Freelance web developer focused on clean code, fast load times, and designs that convert."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B9NxQMPF.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mithunesh S — Freelance Web Developer | Modern Websites"
    }, {
      name: "description",
      content: "Freelance web developer building fast, modern, SEO-friendly websites, landing pages, and portfolios. Chat on WhatsApp to start your project."
    }, {
      property: "og:title",
      content: "Mithunesh S — Freelance Web Developer"
    }, {
      property: "og:description",
      content: "Modern websites, landing pages, and portfolios that convert. Available for freelance projects."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$5.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  TestimonialsRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  About as A,
  Contact as C,
  Hero as H,
  Portfolio as P,
  Services as S,
  Testimonials as T,
  router as r
};
