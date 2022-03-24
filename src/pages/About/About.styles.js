import styled from "styled-components";

export const AboutStyled = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .tags {
    font-size: clamp(20px, 2vw, 30px);
    // color: red;
  }
`;

export const AboutContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Tag = styled.li`
  font-size: 50px;
  color: white;

  a {
    color: white;
    font-size: 50px;
  }
`;

export const AboutContentHeader = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: clamp(30px, 6vw, 50px);
  margin-bottom: 10px;
  white-space: nowrap;
  transition: all 0.3s ease;

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const AboutContentText = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: clamp(20px, 2vw, 30px);
  transition: all 0.3s ease;

  // @media screen and (max-width: 640px) {
  //   font-size: 20px;
  // }

  span {
    color: ${({ theme }) => theme.secondary};
  }

  a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    position: relative;

    // &::after{
    //   position: absolute;
    //   content: '',
    //   left: 0;
    //   bottom: 0;
    //   width: 100%;
    //   height: 2px;

    //   background: ${({ theme }) => theme.secondary};
    // }

    &:hover {
      color: #ffffff;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
    }
  }
`;

export const IconCloudStyled = styled.div`
  width: 50%;
  background: red;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
