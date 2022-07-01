import React, { useState } from "react";
import ArticleComponent from "../ArticleComponent";
import CardComponent from "../CardComponent";

const Content = () => {
  const [articles] = useState(null);
  return (
    <main className="main-content">
      <header>
        <h1>Relevant</h1>
        <h1>Lates</h1>
        <h1>Post</h1>
      </header>
      <CardComponent />
    </main>
  );
};

export default Content;
