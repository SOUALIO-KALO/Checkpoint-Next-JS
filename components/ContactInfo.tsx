import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "kalosoualio@gmail.com",
    link: "https://mail.google.com/",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+225 01 61 85 27 85",
    link: "tel:+225 0161852785",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abidjan, CI",
    link: null,
  },
];

export function ContactInfo() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 xl:px-20 2xl:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Coordonnées
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          N'hésitez pas à nous contacter via l'un de ces canaux
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {contactDetails.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-md"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-2 text-primary hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-muted-foreground">{item.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
