import React from "react";

import Metadata from "../components/Metadata";
import HomeSection from "../components/sections/Home";

export default function IndexPage() {
  return (
    <>
      <HomeSection />
    </>
  );
}

export const Head = () => <Metadata />;
