import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, with product management, cart functionality, and payment integration.",
    image:
      "https://images.pexels.com/photos/6956304/pexels-photo-6956304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Dashboard UI",
    description:
      "A responsive admin dashboard with dark mode, data visualization, and user management features.",
    image:
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Recharts", "shadcn/ui"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blog platform with markdown support, comments, and user authentication.",
    image:
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "React"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-[#0a0a0a] px-4 xl:px-20 2xl:px-32 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold mb-4">Projets Phares</h1>
        <p className="text-gray-500 text-lg">
          Une présentation de mes travaux récents, incluant des applications
          web, des projets de design et bien plus encore.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="pt-0 overflow-hidden group transition-all hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover ransition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <Github className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
