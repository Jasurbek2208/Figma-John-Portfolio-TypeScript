import styled from "styled-components";
import { Link } from "react-router-dom";

import facebook from "../../page/Images/SocialLogo/facebook.png";
import instagram from "../../page/Images/SocialLogo/insta.png";
import twitter from "../../page/Images/SocialLogo/twitter.png";
import linkedln from "../../page/Images/SocialLogo/Linkedin.png";

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer__wrapper">
        <div className="social__wrapper">
          <Link to="/">
            <img src={facebook} alt="facebook" />
          </Link>
          <a href="https://instagram.com/Jasurbek_Studios">
            <img src={instagram} alt="instagram" />
          </a>
          <Link to="/">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link to="/">
            <img src={linkedln} alt="linkedln" />
          </Link>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
        <a href="https://t.me/JasurbekFrontEnd">
          <h3>View my FrontEnd Portfolio</h3>
        </a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin: 134px 0 54px;

  .footer__wrapper {
    max-width: 230px;
    margin: 0 auto;

    .social__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 36px;
    }

    & > p,
    a {
      text-decoration: none;
      margin-top: 26px;
      font-size: 14px;
      line-height: 21px;
      text-align: center;

      h3 {
        margin-top: 28px;
        padding: 14px;
        border: 2px solid #ff6464;
        transition: .3s;

        :hover {
          color: #fff;
          background: #ff6464;
        }
      }
    }
  }
`;
