import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function PNF() {
  return (
    <StyledPNF>
      <h2 id="btn"><Link to={"/"}>Back to Home</Link></h2>
      <h1>404</h1>
      <h1>Page Not Found !</h1>
    </StyledPNF>
  );
}

const StyledPNF = styled.div`
  position: relative;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #btn a {
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 30px;
    padding: 15px 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #fff;
    text-decoration: none;
    border: 2px solid #ff6464;
    border-radius: 2px;
    background-color: #ff6464;
    transition: 0.5s;

    &:hover {
      color: #ff6464;
      background-color: #fff0;
    }
    &:active {
      transform: translateY(4px);
    }
  }

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 499px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 385px) {
    h1 {
      font-size: 2.4rem;
    }
  }
`;
