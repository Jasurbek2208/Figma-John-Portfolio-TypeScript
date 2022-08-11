import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: #e2e2e2;

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 18px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;

    .card {
      padding: 10px 16px;
      max-width: 300px;
      max-height: 400px;
      box-shadow: 4px 4px 6px 0px #4b4b4bba;
      background-color: #fff;

      .bottom {
        .like {
          width: 20px;
          height: 20px;
          background-color: #0c0c0c;
          border: 1px solid #4b4b4bba;

          &.liked {
            background-color: red;
          }
        }
      }
    }
  }
`;
