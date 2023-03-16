import React, { useEffect } from "react";
import { navigate } from "gatsby";

import Metadata from "../components/Metadata";
import HomeSection from "../components/sections/Home";

export default function IndexPage() {
  useEffect(() => navigate("/#home"), []);

  return (
    <>
      <HomeSection />
    </>
  );
}

export const Head = () => <Metadata />;
