import React from "react";
import { Cloud, ICloud } from "react-icon-cloud";
import styledComponents from "styled-components";

const skills = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "SCSS",
  },
  {
    name: "React",
  },
  {
    name: "Redux",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Figma",
  },
  {
    name: "GIT",
  },
  {
    name: "Github",
  },
];

const options: ICloud["options"] = {
  imagePadding: 2000,
  clickToFront: 500,
  depth: 0.5,
  imageScale: 0.25,
  initial: [0.1, -0.1],
  outlineColour: "#0000",
  reverse: true,
  tooltip: "native",
  tooltipDelay: 0,
  wheelZoom: false,
};

const IconCloud = () => {
  return (
    <Cloud options={options}>
      {skills.map((item, i) => {
        return <a className="skill">{item.name}</a>;
      })}
    </Cloud>
  );
};

export default IconCloud;
