import React from "react";

import Metadata from "../components/Metadata";
import HomeSection from "../components/sections/Home";
import ServicesSection from "../components/sections/Services";

export default function IndexPage() {
  return (
    <>
      <HomeSection />
      <ServicesSection />
    </>
  );
}

export const Head = () => <Metadata />;
