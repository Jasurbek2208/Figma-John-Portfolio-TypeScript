import styled from "styled-components";

import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";
import { Card } from "./Card";
import { blogICard } from "./BlogCardInterface";

export function Blog() {
  const cardValue : blogICard[] = [
    {
      title: "UI Interactions of the week",
      publicateDate: "12 Feb 2019",
      type: "Express, Handlebars",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      publicateDate: "12 Feb 2019",
      type: "Express, Handlebars",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      publicateDate: "12 Feb 2019",
      type: "Express, Handlebars",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      publicateDate: "12 Feb 2019",
      type: "Express, Handlebars",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <StyledBlog>
      <Navbar />
      <div className="container">
        <h1>Blog</h1>
        <div className="blogs__wrapper">
          <Card cardValue={cardValue[0]} />
          <Card cardValue={cardValue[1]} />
          <Card cardValue={cardValue[2]} />
          <Card cardValue={cardValue[3]} />
        </div>
      </div>
      <Footer />
    </StyledBlog>
  );
}

const StyledBlog = styled.div`
  margin-top: 160px;

  .container {
    & > h1 {
      font-weight: 700;
      font-size: 44px;
      line-height: 60px;
    }
  }
`;
