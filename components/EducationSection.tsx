import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    period: "Déc 2024 - en cours",
    degree: "Certification  en Software Developer Bootcamp",
    institution: "GOMYCODE",
    description:
      "Spécialisé en technologies web et conception d'interfaces utilisateur. Mémoire sur les applications web progressives.",
  },
  {
    period: "2023 - 2024",
    degree: "Licence professionnelle en Génie Logiciel",
    institution: "Institut de Formation Sainte  Marie",
    description:
      "Cours portant sur la programmation, les structures de données, les algorithmes et le développement web.",
  },
  {
    period: "2020 - 2022",
    degree:
      "Brevet de Technicien Supérieur en Informatique Développeur d'Application",
    institution:
      "Centre d'enseignement Technique des  Métiers de l'Energie Rénouvelable",
    description:
      "Cours portant sur la programmation, les structures de données, les algorithmes et le développement web.",
  },
];

export function EducationSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 xl:px-20 2xl:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Mon parcours académique et mes qualifications
        </p>
      </div>

      <div className="space-y-8">
        {education.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <CardTitle className="text-xl">{item.degree}</CardTitle>
                <span className="text-sm font-medium text-muted-foreground mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-primary font-medium">{item.institution}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
