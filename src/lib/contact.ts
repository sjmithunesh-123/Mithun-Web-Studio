// WhatsApp configuration - replace WHATSAPP_NUMBER with real number (E.164 without +)
export const WHATSAPP_NUMBER = "916382100601";
export const WHATSAPP_MESSAGE =
  "Hello Mithunesh, I visited your website and would like to discuss a project.";

export const whatsappLink = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${6382100601}?text=${encodeURIComponent(msg)}`;

export const CONTACT = {
  email: "sjmithunesh@gmail.com",
  linkedin: "https://www.linkedin.com/in/mithunesh-s-9791b9345/",
  github: "https://github.com/sjmithunesh-123",
};
