import styled from "styled-components";
import { IWorks } from "./IWorks";

interface ICard {
  cardValue: IWorks;
  img: string;
}

export function Card({ cardValue, img }: ICard) {
  return (
    <StyledCard>
      <div className="left">
        <img src={img} alt="img" />
      </div>
      <div className="right">
        <h1>{cardValue.title}</h1>
        <div className="publicateDate">
          <div className="date">{cardValue.publicateDate}</div>
          <p>{cardValue.type}</p>
        </div>
        <p>{cardValue.p}</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid #e0e0e0;

  .left {
    max-width: 246px;
    max-height: 180px;
  }

  .right {
    max-width: 594px;

    h1 {
      font-weight: 700;
      font-size: 30px;
      line-height: 44px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }

    .publicateDate {
      margin: 18px 0;
      display: flex;
      align-items: center;
      gap: 26px;

      .date {
        width: 62px;
        height: 25px;
        font-size: 18px;
        font-weight: 900;
        line-height: 60px;
        color: #fff;
        background: #142850;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        font-size: 20px;
        line-height: 29px;
        color: #8695a4;
      }
    }
  }
`;
