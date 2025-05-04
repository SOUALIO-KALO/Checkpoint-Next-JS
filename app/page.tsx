import FeaturedSection from "@/components/FeaturedSection";
import HerosSection from "@/components/HerosSection";
import Skills from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HerosSection />
      <Skills />
      <FeaturedSection />
    </>
  );
}
