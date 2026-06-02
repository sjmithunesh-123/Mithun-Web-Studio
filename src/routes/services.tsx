import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mithunesh S | Web Development & Design" },
      {
        name: "description",
        content:
          "Website development, landing pages, portfolios, business websites, and maintenance. End-to-end freelance web services tailored to your goals.",
      },
      { property: "og:title", content: "Services — Mithunesh S" },
      {
        property: "og:description",
        content:
          "End-to-end web development services: websites, landing pages, portfolios, business sites, and maintenance.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="pt-24">
      <Services />
    </div>
  ),
});
