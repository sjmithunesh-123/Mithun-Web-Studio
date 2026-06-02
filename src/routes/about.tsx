import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mithunesh S | Freelance Web Developer" },
      {
        name: "description",
        content:
          "Learn about Mithunesh S — a freelance web developer crafting modern, high-performance websites with React, Next.js, and Tailwind CSS.",
      },
      { property: "og:title", content: "About — Mithunesh S" },
      {
        property: "og:description",
        content:
          "Freelance web developer focused on clean code, fast load times, and designs that convert.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="pt-24">
      <About />
    </div>
  ),
});
