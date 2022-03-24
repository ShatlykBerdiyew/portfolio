import React from "react";
import {
  AboutContent,
  AboutContentHeader,
  AboutContentText,
  AboutStyled,
  IconCloudStyled,
  Tag,
} from "./About.styles";
import ReduxIcon from "simple-icons/icons/redux";
import typescript from "simple-icons/icons/typescript";
import javascript from "simple-icons/icons/javascript";
import nextdotjs from "simple-icons/icons/nextdotjs";
import nodedotjs from "simple-icons/icons/nodedotjs";
import Redux from "simple-icons/icons/redux";
import Reacticon from "simple-icons/icons/react";
import html5Icon from "simple-icons/icons/html5";
import cssIcon from "simple-icons/icons/css3";
import tailwindIcon from "simple-icons/icons/tailwindcss";
import antdesingIcon from "simple-icons/icons/antdesign";
import figmaIcon from "simple-icons/icons/figma";
import UbuntuIcon from "simple-icons/icons/ubuntu";
import FirefoxIcon from "simple-icons/icons/firefoxbrowser";
import GoogleIcon from "simple-icons/icons/googlechrome";
import MUIcon from "simple-icons/icons/materialdesign";
import Bootstrap from "simple-icons/icons/bootstrap";
import firebaseIcon from "simple-icons/icons/firebase";
import filezillaIcon from "simple-icons/icons/filezilla";
import StyledcomIcon from "simple-icons/icons/styledcomponents";
import AlgoritmsIcon from "simple-icons/icons/thealgorithms";

import {Cloud, renderSimpleIcon} from "react-icon-cloud";

const icons = [
  typescript,
  javascript,
  nodedotjs,
  nextdotjs,
  Redux,
  Reacticon,
  html5Icon,
  cssIcon,
  tailwindIcon,
  antdesingIcon,
  figmaIcon,
  UbuntuIcon,
  FirefoxIcon,
  GoogleIcon,
  MUIcon,
  Bootstrap,
  firebaseIcon,
  filezillaIcon,
  StyledcomIcon,
  AlgoritmsIcon,
];

const makeIcons = () =>
  icons.map((icon) =>
    renderSimpleIcon({
      icon,
      minContrastRatio: 1.2,
      // bgHex: bg,
      size: 70,
      // fallbackHex: invertBg(bg),
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        // onClick: (e: any) => e.preventDefault(),
      },
    })
  );

const About = () => {
  const cloudIcons = makeIcons();
  return (
    <AboutStyled className="center" id="about">
      <AboutContent>
        <AboutContentHeader className="about_header">
          More about me <span>. . .</span>
        </AboutContentHeader>
        <AboutContentText>
          I am <span>Front-End Developer</span> building the Front-End Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the <a href="#projects">Projects </a>
          section<span>.</span>
        </AboutContentText>
      </AboutContent>
      {/* <IconCloudStyled> */}
      {/* <IconCloud /> */}
      <Cloud>{cloudIcons}</Cloud>
      {/* </IconCloudStyled> */}
    </AboutStyled>
  );
};

export default About;
