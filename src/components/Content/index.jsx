import React, { useState } from "react";
import ArticleComponent from "../ArticleComponent";
import CardComponent from "../CardComponent";

const Content = () => {
  const [articles] = useState(null);
  return (
    <main className="main-content">
      <header>
        <span>Relevant</span>
        <span>Lates</span>
        <span>Post</span>
      </header>
      <CardComponent />
    </main>
  );
};

export default Content;
