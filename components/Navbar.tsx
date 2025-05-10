"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface IRoute {
  href: string;
  label: string;
}

const routes: IRoute[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-600 bg-[#0a0a0a]/80 backdrop-blur-md text-white flex justify-between items-center py-6 px-4 xl:px-20 2xl:px-32">
      <div className="">
        <Link href="/" className="text-xl font-bold">
          Porfolio
        </Link>
      </div>
      <nav className="">
        <ol className="flex items-center gap-4">
          {routes.map((route: IRoute) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-white",
                  pathName === route.href ? "text-white" : "text-gray-400"
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
