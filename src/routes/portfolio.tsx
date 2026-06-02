import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Mithunesh S | Recent Web Projects" },
      {
        name: "description",
        content:
          "Selected freelance projects by Mithunesh S — landing pages, business websites, and portfolios built with modern web tech.",
      },
      { property: "og:title", content: "Portfolio — Mithunesh S" },
      {
        property: "og:description",
        content:
          "Recent freelance web development work: landing pages, business sites, and portfolios.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: () => (
    <div className="pt-24">
      <Portfolio />
    </div>
  ),
});
