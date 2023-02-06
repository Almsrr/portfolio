import React from "react";

import Layout from "../components/Layout";
import Metadata from "../components/Metadata";

export default function IndexPage() {
  return (
    <Layout>
      <main>
        <h1>Gatsby site! 🎉🎉🎉</h1>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in
          real-time. 😎
        </p>
      </main>
    </Layout>
  );
}

export const Head = () => <Metadata />;
