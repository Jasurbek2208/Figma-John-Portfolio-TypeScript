import styled from "styled-components";
import { Link } from "react-router-dom";

import JohnAvatar from "../../../../Images/img/JohnAvatar.png";

export function Main() {
  return (
    <StyledMain>
      <div className="container">
        <section className="left">
          <h1>
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Link to="/">
            <button type="button">Download Resume</button>
          </Link>
        </section>
        <section className="right">
          <img src={JohnAvatar} alt="avatar" />
        </section>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  .container {
    padding: 194px 15px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    row-gap: 32px;

    .left {
      h1 {
        font-weight: 700;
        font-size: 44px;
        line-height: 60px;
      }

      p {
        margin: 40px 0;
        max-width: 496px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .right {
      max-width: 243px;
      max-height: 243px;
    }
  }
`;
