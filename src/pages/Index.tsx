import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import FloatingIcons from "@/components/FloatingIcons";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollProgress from "@/components/ScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";

const Index = () => {
  const sectionIds = [
    "about",
    "projects",
    "skills",
    "experience",
    "education",
    "certifications",
    "coding-profiles",
    "contact",
  ];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="bg-background text-foreground min-h-screen relative">
      <ScrollProgress />
      <FloatingIcons />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <SectionWrapper isActive={activeSection === "about"}>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "projects"}>
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "skills"}>
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "experience"}>
        <ExperienceSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "education"}>
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "certifications"}>
        <CertificationsSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "coding-profiles"}>
        <CodingProfilesSection />
      </SectionWrapper>
      <SectionWrapper isActive={activeSection === "contact"}>
        <ContactSection />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default Index;
