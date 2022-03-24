import styled from "styled-components";

export const ProjectsStyled = styled.section`
  height: 100%;
  padding-bottom: 100px;
`;

export const ProjectContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 150px;
  transition: all 0.3s ease;
  margin-bottom: 50px;
  margin-top: 50px;

  // opacity: 0;

  @media screen and (max-width: 475px) {
    // flex-direction: column;
    min-width: 100%;
    margin-top: 0px;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    justify-content: space-between;
  }
`;

export const ProjectImg = styled.div`
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 50%;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: all 0.3s ease;

  @media screen and (max-width: 640px) {
    position: absolute;
    min-width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
  }
`;

export const ProjectText = styled.div`
  width: 50%;
  margin-left: -150px;
  z-index: 1;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-left: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
  }

  h1 {
    text-align: right;
    width: 100%;
    font-size: clamp(30px, 5vw, 50px);
    padding-right: 20px;
    transition: all 0.3s ease;
    font-weight: 700;
    cursor: pointer;
    color: ${({theme}) => theme.secondary};

    @media screen and (max-width: 640px) {
      text-align: left;
      padding: 10px;
      color: ${({theme}) => theme.iconSecondary};
    }
  }

  .projectContent {
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: clamp(15px, 2vw, 20px);
    color: white;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.5);
    // min-height: 250px;

    @media screen and (max-width: 640px) {
      height: 100%;
      padding: 10px;
    }
  }

  .tools {
    display: flex;
    text-align: right;
    width: 100%;
    justify-content: flex-end;

    p {
      color: ${({theme}) => theme.secondary};
      text-decoration: none;
      font-size: clamp(15px, 2vw, 25px);
      white-space: nowrap;
      // text-align: right;
      margin-top: 10px;
      padding-right: 20px;

      @media screen and (max-width: 640px) {
        color: ${({theme}) => theme.iconSecondary};
      }
    }
  }

  .sources {
    float: right;
    margin-top: 10px;

    a {
      color: ${({theme}) => theme.secondary};
      font-size: clamp(25px, 2vw, 40px);
      margin-right: 20px;

      @media screen and (max-width: 640px) {
        color: ${({theme}) => theme.iconSecondary};
      }
    }
  }
`;
