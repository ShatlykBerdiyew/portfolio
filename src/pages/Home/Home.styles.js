import { Link } from "react-scroll";
import styled from "styled-components";
import { Circle } from "../../globalStyle";

// export const s = {
//   xxl: "1536px",
//   xl: "1280px",
//   lg: "1024px",
//   md: "768px",
//   sm: "640px",
//   xs: "475px",
// };

export const HomeStyled = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  .circleFirst {
    ${Circle}
    top: -50%;
    left: -20%;
    width: 1300px;
    height: 1300px;
    // scale: 0.2;
  }

  .circleSecond {
    ${Circle}
    width: 1000px;
    height: 1000px;
    top: -30%;
    right: -20%;
  }

  .circleThird {
    ${Circle}
    bottom: -40%;
    right: 40%;
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 475px) {
    .circleFirst {
      width: 350px;
      height: 350px;
      top: 35%;
      left: 50%;
      // background: red;
    }

    .circleSecond {
      width: 400px;
      height: 400px;
      top: -20%;
      left: -20%;
      // background: red;
    }

    .circleThird {
      width: 400px;
      height: 400px;
    }
  }
`;

export const HomeContent = styled.div`
  width: 60vw;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);

  @media screen and (max-width: 475px) {
    left: 40%;
  }

  h1 {
    font-size: clamp(50px, 8vw, 120px);
    color: ${({ theme }) => theme.primary};
    letter-spacing: 2px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;

    @media screen and (max-width: 475px) {
      margin-bottom: 10px;
    }
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: clamp(30px, 6vw, 90px);
    white-space: nowrap;

    @media screen and (max-width: 475px) {
      // transform: translateY(-20px);
      // margin-top: 20px;
    }
  }
`;
