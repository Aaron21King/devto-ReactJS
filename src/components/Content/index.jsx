// import React, { useState } from "react";
// import ArticleComponent from "../ArticleComponent";
import CardComponent from "../CardComponent";
import MainCard from "../mainCard/mainCard";

const Content = () => {
  // const [articles] = useState(null);
  return (
    <main className="main-content">
      <header>
        <span>Relevant</span>
        <span>Lates</span>
        <span>Post</span>
      </header>
      <MainCard />
      <CardComponent />
    </main>
  );
};

export default Content;
