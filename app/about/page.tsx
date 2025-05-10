import { AboutContent } from "@/components/AboutContent";
import { EducationSection } from "@/components/EducationSection";
// import { ExperienceSection } from "@/components/ExperienceSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Your Name",
  description: "Learn more about my background, experience, and education.",
};

const About = () => {
  return (
    <div className="bg-[#121212]">
      <AboutContent />
      {/* <ExperienceSection /> */}
      <EducationSection />
    </div>
  );
};

export default About;
