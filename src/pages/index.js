import React from "react";

import Metadata from "../components/Metadata";
import HomeSection from "../components/sections/Home";
import ServicesSection from "../components/sections/Services";
import ProjectsSection from "../components/sections/Projects";
import StackSection from "../components/sections/Stack";
import ContactSection from "../components/sections/Contact";

export default function IndexPage() {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <StackSection />
      {/* <ContactSection /> */}
    </>
  );
}

export const Head = () => <Metadata />;
