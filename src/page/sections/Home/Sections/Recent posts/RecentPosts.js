import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Card } from "./Card";

export function RecentPosts() {
  const cardValue = [
    {
      title: "Making a design system from scratch",
      publicateDate: "12 Feb 2020",
      type: "Design, Pattern",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      publicateDate: "12 Feb 2020",
      type: "Figma, Icon Design",
      p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <StyledRecentPosts>
      <div className="container">
        <div className="topTitle__wrapper">
          <h1>Recent posts</h1>
          <Link to="/">View all</Link>
        </div>
        <div className="postCards__wrapper">
          <Card cardValue={cardValue[0]} />
          <Card cardValue={cardValue[1]} />
        </div>
      </div>
    </StyledRecentPosts>
  );
}

const StyledRecentPosts = styled.section`
  background-color: #edf7fa;

  .container {
    padding: 32px 15px;

    .postCards__wrapper,
    .topTitle__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
    }

    .topTitle__wrapper {
      margin-bottom: 22px;

      a {
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        text-decoration: none;
        color: #00a8cc;
      }
    }
  }
`;
