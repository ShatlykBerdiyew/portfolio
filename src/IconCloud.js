import * as React from "react";
import {
  Cloud,
  renderSimpleIcon,
  renderImg,
  ICloud,
  // renderText,
} from "react-icon-cloud";
import {imgLink} from "../redux/constantLink";
import typescriptIcon from "simple-icons/icons/typescript";
import javascript from "simple-icons/icons/javascript";
import nextdotjs from "simple-icons/icons/nextdotjs";
import nodedotjs from "simple-icons/icons/nodedotjs";
import Redux from "simple-icons/icons/redux";
import Reacticon from "simple-icons/icons/react";
import "../sss.css";

const icons = [
  typescriptIcon,
  javascript,
  nodedotjs,
  nextdotjs,
  Redux,
  Reacticon,
];

// interface ChildComponentProps {
//   data: any;
// }

export async function getServerSideProps() {
  const res = await fetch(`${constantApi}company-list`);
  const companies = res.json();

  return {
    props: companies,
  };
}

export default function IconCloud({data, companies}) {
  const containerProps = () => {
    style = {
      // padding: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      paddingTop: 0,
      zIndex: 2000,
    };
  };

  const canvasProps = {};

  const options = {
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

  const ImgATag = data.map((item) =>
    renderImg({
      imgProps: {
        // src: imgLink + item.logo,
        alt: item.title,
        width: 880,
        height: 880,
      },
      aProps: {
        href: `#${item.title}`,
      },
    })
  );

  const makeIcons = () =>
    icons.map((icon) =>
      renderSimpleIcon({
        icon,
        minContrastRatio: 1.2,
        // bgHex: bg,
        size: 42,
        // fallbackHex: invertBg(bg),
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );

  const cloudIcons = makeIcons();

  // console.log("data:   ", data);
  return (
    <div style={{zIndex: 100}} className="iconCloud">
      <Cloud
        containerProps={containerProps}
        canvasProps={canvasProps}
        options={options}
      >
        {cloudIcons}
      </Cloud>
    </div>
  );
}

// export default Category
