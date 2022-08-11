import styled from "styled-components";
import { blogICard } from "./BlogCardInterface";

interface cardValueProps {
  cardValue: blogICard;
}

export function Card({cardValue}: cardValueProps) {
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
  max-width: 680px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-weight: 500;
    font-size: 30px;
    line-height: 44px;
  }

  .publicateDate {
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-size: 20px;
      line-height: 29px;

      &:last-of-type {
        color: #8695a4;
      }
    }
  }
`;
