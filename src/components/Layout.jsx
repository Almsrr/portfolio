import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="site-layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
