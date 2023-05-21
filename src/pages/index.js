import React from "react";

import Metadata from "../components/Metadata";
import HomeSection from "../components/sections/Home";
import ServicesSection from "../components/sections/Services";
import ProjectsSection from "../components/sections/Projects";
import StackSection from "../components/sections/Stack";
import ContactSection from "../components/sections/Contact";
import Layout from "../components/Layout";
import SiteContextProvider from "../context";

export default function IndexPage() {
  return (
    <SiteContextProvider>
      <Layout>
        <HomeSection />
        <ServicesSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </Layout>
    </SiteContextProvider>
  );
}

export const Head = () => <Metadata />;
