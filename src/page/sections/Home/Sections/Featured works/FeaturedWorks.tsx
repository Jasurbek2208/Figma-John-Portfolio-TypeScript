import styled from "styled-components";

import cardImg1 from "../../../../Images/img/cardImg1.png";
import cardImg2 from "../../../../Images/img/cardImg2.png";
import cardImg3 from "../../../../Images/img/cardImg3.png";

import { Card } from "./Card";
import { IWorks } from "./IWorks";

export function FeaturedWorks() {
  const cardValue: IWorks[] = [
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
  ];

  return (
    <StyledFeaturedWorks>
      <div className="container">
        <h1>Featured works</h1>
        <Card cardValue={cardValue[0]} img={cardImg1} />
        <Card cardValue={cardValue[1]} img={cardImg2} />
        <Card cardValue={cardValue[2]} img={cardImg3} />
      </div>
    </StyledFeaturedWorks>
  );
}

const StyledFeaturedWorks = styled.section`
  .container {
    & > h1 {
      margin-top: 15px;
      font-size: 22px;
      line-height: 60px;
    }
  }
`;
