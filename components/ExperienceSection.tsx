import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    period: "2021 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    description:
      "Lead the frontend development team. Implemented new features, improved performance, and mentored junior developers.",
  },
  {
    period: "2018 - 2021",
    title: "Web Developer",
    company: "Creative Agency",
    description:
      "Developed responsive websites and web applications for clients in various industries. Worked with React, TypeScript, and Node.js.",
  },
  {
    period: "2016 - 2018",
    title: "Junior Developer",
    company: "Startup Hub",
    description:
      "Started my professional journey. Worked on frontend projects, fixed bugs, and learned about software development practices.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20  px-4 xl:px-20 2xl:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and past positions
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <CardTitle className="text-xl">{experience.title}</CardTitle>
                <span className="text-sm font-medium text-muted-foreground mt-1 sm:mt-0">
                  {experience.period}
                </span>
              </div>
              <p className="text-primary font-medium">{experience.company}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
