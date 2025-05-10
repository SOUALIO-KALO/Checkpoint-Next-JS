import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HerosSection = () => {
  return (
    <section className="h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center gap-10">
        <div className="text-center px-12">
          <h1 className="text-4xl font-bold pb-8">
            Salut, je m&apos;appelle Kalo Soualio
          </h1>
          <p className="text-xl text-gray-400">
            Je suis un développeur web passionné, spécialisé dans la création de
            sites web esthétiques, <br />
            fonctionnels et conviviaux utilisant les technologies modernes.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              Mes travaux
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/contact" className="text-black">
              Me contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HerosSection;
