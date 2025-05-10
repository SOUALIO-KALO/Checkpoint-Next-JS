import { Button } from "@/components/ui/button";

import { Download } from "lucide-react";
import Image from "next/image";

export function AboutContent() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 xl:px-20 2xl:px-32 ">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Je suis un étudiant passionné en développement web, actuellement en
            formation au sein du bootcamp de software developer chez GoMyCode.
            Je me spécialise dans la création de sites web et d'applications web
            modernes et réactifs, avec un intérêt particulier pour le
            développement front-end, notamment avec des technologies comme React
            et Next.js. Je commence également à explorer les technologies
            back-end.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Mon parcours dans le développement web a débuté récemment, mais j’ai
            déjà eu l’opportunité de travailler sur des projets concrets, comme
            la création d’un site web pour une entreprise locale dans le cadre
            de mes études. Je suis motivé à collaborer avec des clients variés,
            des startups aux entreprises établies, pour les aider à développer
            leur présence en ligne et leurs produits numériques.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl lg:order-first">
          <Image
            src="images/profile01.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
