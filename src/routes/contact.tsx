import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mithunesh S | Freelance Web Developer" },
      {
        name: "description",
        content:
          "Get in touch with Mithunesh S for freelance web development. Chat on WhatsApp, email, or connect on LinkedIn — replies within a few hours.",
      },
      { property: "og:title", content: "Contact — Mithunesh S" },
      {
        property: "og:description",
        content:
          "Reach out for a freelance web project — fastest reply on WhatsApp.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div className="pt-24">
      <Contact />
    </div>
  ),
});
