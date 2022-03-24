import styled from "styled-components";

export const ExperieneStyled = styled.section`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;

  .experience_content {
    width: 60vw;

    @media screen and (max-width: 768px) {
      width: 70vw;
      margin-bottom: 50px;
    }
  }

  .experience {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 70px;
    position: relative;

    @media screen and (max-width: 475px) {
      flex-direction: column;
      padding-bottom: 0;
      height: auto;
    }

    h1 {
      font-size: clamp(20px, 3vw, 40px);
      white-space: nowrap;
      color: ${({theme}) => theme.icon};

      @media screen and (max-width: 475px) {
        font-size: 30px;
      }
    }
    a {
      font-size: clamp(15px, 2vw, 30px);
      color: ${({theme}) => theme.ahref};

      @media screen and (max-width: 475px) {
        font-size: 25px;
      }
    }

    span {
      color: ${({theme}) => theme.secondary};
    }
    .experience_time {
      h2 {
        font-size: clamp(15px, 2vw, 30px);
        color: ${({theme}) => theme.icon};

        @media screen and (max-width: 475px) {
          margin-right: 20px;
        }
      }

      @media screen and (max-width: 475px) {
        display: flex;
      }
    }

    .span {
      width: 100vw;
      height: 2px;
      background: ${({theme}) => theme.secondary};

      @media screen and (max-width: 475px) {
        width: 60vw;
      }
    }
  }
`;
