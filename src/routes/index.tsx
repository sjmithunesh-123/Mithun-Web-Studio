import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mithunesh S — Freelance Web Developer | Modern Websites" },
      {
        name: "description",
        content:
          "Freelance web developer building fast, modern, SEO-friendly websites, landing pages, and portfolios. Chat on WhatsApp to start your project.",
      },
      { property: "og:title", content: "Mithunesh S — Freelance Web Developer" },
      {
        property: "og:description",
        content:
          "Modern websites, landing pages, and portfolios that convert. Available for freelance projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Hero />;
}
