import React from "react";
import styled from "styled-components";

import cardImg1 from "../../Images/img/cardImg1.png";
import cardImg2 from "../../Images/img/cardImg2.png";
import cardImg3 from "../../Images/img/cardImg3.png";
import cardImg4 from "../../Images/img/cardImg4.png";

import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";
import { Card } from "../Home/Sections/Featured works/Card";

export function Works() {
  const cardValue = [
    {
      title: "Designing Dashboards",
      publicateDate: "2020",
      type: "Dashboard",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      publicateDate: "2018",
      type: "Illustration",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "36 Days of Malayalam type",
      publicateDate: "2018",
      type: "Typography",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Components",
      publicateDate: "2018",
      type: "Components, Design",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <StyledWorks>
      <Navbar />
      <div className="container">
        <h1>Blog</h1>
        <div className="blogs__wrapper">
          <Card cardValue={cardValue[0]} img={cardImg1} />
          <Card cardValue={cardValue[1]} img={cardImg2} />
          <Card cardValue={cardValue[2]} img={cardImg3} />
          <Card cardValue={cardValue[3]} img={cardImg4} />
        </div>
      </div>
      <Footer />
    </StyledWorks>
  );
}

const StyledWorks = styled.div`
  margin-top: 160px;

  .container {
    & > h1 {
      font-weight: 700;
      font-size: 44px;
      line-height: 60px;
    }
  }
`;
