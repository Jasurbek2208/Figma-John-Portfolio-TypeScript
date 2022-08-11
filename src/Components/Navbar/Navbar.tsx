import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation().pathname;

  return (
    <StyledNavbar>
      <div className="container">
        <ul className="nav-list">
          <li>
            <Link to="/" className={location === "/" ? "On" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Blog" className={location === "/Blog" ? "On" : ""}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/Works" className={location === "/Works" ? "On" : ""}>
              Works
            </Link>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  top: 0;
  margin: 0 auto;
  padding: 27px 14vw;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #dfdfdfd5;
  position: fixed;

  .container {
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 33px;
      list-style: none;

      li {
        a {
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
          text-align: right;
          color: #000;
          text-decoration: none;

          &.On {
            color: #ff6464;
          }
        }
      }
    }
  }
`;
