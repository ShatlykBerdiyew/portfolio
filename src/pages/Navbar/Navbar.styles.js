import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100vw;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const Logo = styled.h1`
  font-size: clamp(50px, 7vw, 100px);
  color: ${({theme}) => theme.secondary};
  letter-spacing: 2px;
  font-weight: 900;
`;

export const Links = styled.h1`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    transform: ${(props) => (props.open ? "" : "translateY(-100vh)")};
    -webkit-transform: ${(props) => (props.open ? "" : "translateY(-100vh)")};
    -moz-transform: ${(props) => (props.open ? "" : "translateY(-100vh)")};
    -o-transform: ${(props) => (props.open ? "" : "translateY(-100vh)")};
    -ms-transform: ${(props) => (props.open ? "" : "translateY(-100vh)")};
    transtion: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    top: 0%;
    left: 0%;
    background: black;
    z-index: 100;
  }

  .active {
    color: red;
  }

  h1 {
    margin-right: 30px;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;

    @media screen and (max-width: 768px) {
      font-size: 40px;
    }

    color: ${({theme}) => theme.primary};
    text-decoration: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;

    &:hover {
      color: ${({theme}) => theme.secondary};
    }

    span {
      color: ${({theme}) => theme.secondary};
      margin-right: 5px;
      font-weight: 700;
    }
  }
`;

export const BurgerButton = styled.button`
  position: relative;
  width: 50px;
  height: 30px;
  border: 0;
  outline: none;
  cursor: pointer;
  display: none;
  background: transparent;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  .rectangle {
    position: absolute;
    height: 4px;
    border-radius: 5px;
    background: ${({theme}) => theme.toggle};
    transition: transform 0.3s;

    &-small {
      width: 50px;
    }

    &-top {
      top: 0;
      left: 0;
      width: 50%;
      transform-origin: top left;
      transform: ${(props) =>
        props.open ? "translate(10px, -2px) rotate(45deg)" : ""};
    }

    &-middle {
      top: 50%;
      left: 0;
      width: 100%;
      transform: ${(props) =>
        props.open ? "translateY(-50%) rotate(-45deg)" : "translateY(-50%)"};
    }

    &-bottom {
      bottom: 0;
      right: 0;
      width: 50%;
      transform-origin: bottom right;
      transform: ${(props) =>
        props.open ? "translate(-10px, 3px) rotate(45deg)" : ""};
    }
  }

  .box {
    position: absolute;
    top: 34px;
    left: 40px;
    width: 350px;
    height: 200px;
    border-radius: 33px;
    background: cyan;
    transform: scale(0);
    transform-property: opacity, transform;
    transition-duration: 0.65s;
  }
`;

export const ContactStyled = styled.div`
  position: fixed;
  top: 80vh;
  left: 5vw;
  line-height: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;

  a {
    color: ${({theme}) => theme.icon};
    font-size: clamp(30px, 4vw, 40px);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    z-index: 100;

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.iconSecondary};
    }
  }
`;

export const Toggle = styled.div`
  position: fixed;
  top: 90vh;
  right: 5vw;
  color: ${({theme}) => theme.icon};
  font-size: clamp(30px, 4vw, 40px);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;

  @media screen and (max-width: 475px) {
    top: 91.5vh;
  }

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.iconSecondary};
  }
`;
