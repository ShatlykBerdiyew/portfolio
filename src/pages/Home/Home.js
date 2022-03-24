import React, {useEffect, useRef, useState} from "react";
// import "./Home.scss";
import {ContactStyled, HomeContent, HomeStyled, Toggle} from "./Home.styles";
import gsap from "gsap";

const Home = () => {
  const ref = useRef(null);

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(
      ".name",
      {
        y: -100,
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        ease: "Power1.ease",
      },
      "+=.5"
    );
    tl.fromTo(
      ".last",
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Power1.ease",
      }
    );
    tl.from("h2", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    // tl.from(".circleFirst", {
    //   scale: 0.1,
    //   duration: 1,
    //   ease: "Power1.ease",
    // });
  }, []);

  return (
    <HomeStyled className="home" id="home">
      <HomeContent>
        <h1 className="name">Shatlyk</h1>
        <h1 className="last">Berdiyev</h1>
        <h2>Front-End Developer</h2>
      </HomeContent>

      <div className="circleFirst"></div>
      <div className="circleSecond"></div>
      <div className="circleThird"></div>
    </HomeStyled>
  );
};

export default Home;
