import React from "react";

export default function Metadata({ title }) {
  const pageTitle = `${title} - AS | Front-End Developer`;
  return (
    <>
      <title>{pageTitle}</title>
    </>
  );
}
