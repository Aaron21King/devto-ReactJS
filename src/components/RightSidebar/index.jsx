import React from "react";
import CardComponent from "../CardComponent";
const listings = [
  {
    id: 1,
    mainTitle: "Front end developer available.",
    subText: "forHire",
  },
  {
    id: 2,
    mainTitle: "PHP",
    subText: "collabs",
  },
  {
    id: 3,
    mainTitle: "Looking for technical writing work",
    subText: "forhire",
  },
  {
    id: 4,
    mainTitle: "I need sponsors for my website",
    subText: "misc",
  },
  {
    id: 5,
    mainTitle: "📨 This Week In React: newsletter for professionals ⚛️",
    subText: "collabs",
  },
];

const help = [
  {
    id: 1,
    mainTitle: "Steps to Build a Zero Trust Architecture for Educational Institutions",

  },
  {
    id: 2,
    mainTitle: "need help",
  },
  {
    id: 3,
    mainTitle: "Run failed: Deploy to Dev - development",
    subText: "1 comment",
  },
  {
    id: 4,
    mainTitle: "Which headless CMS would you recommend for a blog site?",
    subText: "30 comments",
  },
];

const discuss = [
  {
    id: 1,
    mainTitle: "How long is too long to stay at a company?",
    subText: "9 comments",
  },
  {
    id: 2,
    mainTitle: "Hello, World!",
    subText: "New",
  },
  {
    id: 3,
    mainTitle: "What is your favourite ES6 feature?",
    subText: "13 comments",
  },
  {
    id: 4,
    mainTitle: "What the hell is <!DOCTYPE html>?",
    subText: "12 comments",
  },
  {
    id: 5,
    mainTitle: "Finnaly joined the team of devs at 'dev.to'. I am happy to be here.",
    subText: "11 comments",
  },
];

const RightSidebar = () => {
  return (
    <aside className="rightBar">
      <div className="rightBar__sidebar">
        <p>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--3wcuFtIH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://forem.dev/remoteimages/uploads/articles/f7nihr3z8nacgyb8ptrn.png" alt="" />
        </p>
        <h2>
          <a href="/#">Forem Android App is Here</a>
        </h2>
      </div>

      <CardComponent tag="Listings" articles={listings} />

      <CardComponent tag="#help" articles={help} />
      <CardComponent tag="#discuss" articles={discuss}/>
    </aside>
  );
};

export default RightSidebar;
