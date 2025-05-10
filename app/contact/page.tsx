import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Your Name",
  description:
    "Get in touch with me for collaborations, job opportunities, or just to say hello.",
};

const Contact = () => {
  return (
    <>
      <ContactForm />
      <ContactInfo />
    </>
  );
};
export default Contact;

/* import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"




export default function ContactPage() {
  return (
    <>
      
      <ContactInfo />
    </>
  )
} */
