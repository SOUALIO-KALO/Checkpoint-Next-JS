import { Code, Layout, Server, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive websites with React, Next.js, and modern CSS frameworks like Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Node.js, Express, and working with databases like MongoDB and PostgreSQL.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences that are both functional and visually appealing.",
  },
  {
    icon: Sparkles,
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed, accessibility, and SEO to provide the best user experience.",
  },
];

const SkillsSection = () => {
  return (
    <section className="px-4 xl:px-20 2xl:px-32 py-16">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-500 text-lg">
          Technologies and skills I've been working with
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-[#0a0a0a] text-white border-gray-700 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardContent className="flex flex-col items-center gap-4">
              <div className="bg-[#121212] p-4 rounded-full">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl text-center">
                {skill.title}
              </h3>
              <p className="text-gray-500 text-center">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
