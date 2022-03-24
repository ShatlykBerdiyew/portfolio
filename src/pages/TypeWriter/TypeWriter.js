import React from "react";
import TypewriterComponent from "typewriter-effect";
import {TypeWriterStyled} from "./TypeWriter.styles";

const TypeWriter = () => {
  return (
    <TypeWriterStyled>
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString("<h1>Shatlyk Berdiyew</h1>")
            .pauseFor(300)
            .deleteAll()
            .typeString("<h1>Front End Developer</h1>")
            .pauseFor(300)
            // .deleteAll()
            // .typeString("<h2>reklama</h2>")
            .start();
        }}
      />{" "}
    </TypeWriterStyled>
  );
};

export default TypeWriter;
