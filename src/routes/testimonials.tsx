import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/Sections";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Mithunesh S | Client Reviews" },
      {
        name: "description",
        content:
          "Read what clients say about working with Mithunesh S — freelance web developer delivering modern, high-converting websites.",
      },
      { property: "og:title", content: "Testimonials — Mithunesh S" },
      {
        property: "og:description",
        content:
          "Client reviews and success stories from freelance web projects.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <div className="pt-24">
      <Testimonials />
    </div>
  ),
});
