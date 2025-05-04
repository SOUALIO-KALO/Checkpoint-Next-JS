import Link from "next/link";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-500 py-12 px-4 xl:px-20 2xl:px-32 mt-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold">
            Porfolio
          </Link>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className=""
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
