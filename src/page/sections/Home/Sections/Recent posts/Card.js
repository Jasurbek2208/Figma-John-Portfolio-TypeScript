import React from "react";
import styled from "styled-components";

export function Card({ cardValue }) {
  return (
    <StyledCard>
      <h1>{cardValue.title}</h1>
      <div className="publicateDate">
        <p>{cardValue.publicateDate}</p>
        <p> | </p>
        <p>{cardValue.type}</p>
      </div>
      <p>{cardValue.p}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 25px 23px;
  max-width: 418px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  .publicateDate {
    margin: 17px 0 12px;
    display: flex;
    align-items: center;
    gap: 26px;

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;
