import {useState, useEffect, useRef} from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import {GlobalStyle, lightTheme, darkTheme} from "./globalStyle";
import {ThemeProvider} from "styled-components";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import gsap from "gsap/all";
import locomotiveScroll from "locomotive-scroll";
import Navbar from "./pages/Navbar/Navbar";
import styled from "styled-components";
import TypeWriter from "./pages/TypeWriter/TypeWriter";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 9000);
  }, []);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: document.querySelector("#container"),
  //     smooth: true,
  //     lerp: 0.06,
  //     multiplier: 0.5,
  //   });
  // }, []);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        {/* {loader ? (
          <TypeWriter />
        ) : ( */}
        <div>
          <GlobalStyle />
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            // data-scroll
            // data-scroll-sticky
            // data-scroll-target
          />
          <div
            id="container"
            // className="scroll"
            // ref={scrollRef}
            // data-scroll
            // data-scroll-speed="2"
            // style={{padding: "0 0 10vh"}}
          >
            <Home />
            <About />
            <Experience />
            <Projects />
            <footer className="footer">
              <h1>Designed & Built by Shatlyk Berdiyev</h1>
            </footer>
          </div>
        </div>
        {/* )} */}
      </ThemeProvider>
    </>
  );
}

export default App;

// const Loader = styled.div`
//   width: 100vw;
//   // min-height: 100vh
//   display: grid;
//   place-items: center;
//   background: red;
//   padding: 0;
//   margin: 0;
// `;

//  <svg
// width="174.721"
// height="105.281"
// viewBox="0 0 174.721 105.281"
// xmlns="http://www.w3.org/2000/svg"
// >
// <g
//   id="svgGroup"
//   strokeLinecap="round"
//   fillRule="evenodd"
//   fontSize="9pt"
//   stroke="#000"
//   strokeWidth="0.25mm"
//   fill="none"
//   style="stroke:#000;strokeWidth:0.25mm;fill:none"
// >
//   <path
//     d="M 82.881 48.58 L 58.381 60.62 Q 56.636 56.718 54.326 54.398 A 12.678 12.678 0 0 0 52.571 52.92 Q 49.141 50.54 45.081 50.54 Q 41.581 50.54 38.571 52.22 Q 35.561 53.9 33.811 57.19 A 13.856 13.856 0 0 0 32.559 60.643 Q 32.061 62.833 32.061 65.52 A 24.104 24.104 0 0 0 32.307 69.064 Q 32.596 71.002 33.222 72.615 A 13.027 13.027 0 0 0 33.811 73.92 A 12.836 12.836 0 0 0 36.102 77.093 A 11.168 11.168 0 0 0 38.571 78.96 Q 41.581 80.64 45.081 80.64 Q 49.141 80.64 52.571 78.26 Q 55.385 76.307 57.492 72.376 A 28.348 28.348 0 0 0 58.381 70.56 L 82.881 82.6 Q 79.101 93.24 69.161 99.26 A 40.766 40.766 0 0 1 55.248 104.416 A 55.655 55.655 0 0 1 45.221 105.28 A 58.611 58.611 0 0 1 32.432 103.94 A 46.986 46.986 0 0 1 21.841 100.24 A 40.351 40.351 0 0 1 9.65 91.18 A 38.189 38.189 0 0 1 5.811 86.17 A 36.718 36.718 0 0 1 0.071 68.031 A 44.86 44.86 0 0 1 0.001 65.52 A 39.488 39.488 0 0 1 1.917 53.052 A 35.1 35.1 0 0 1 5.811 44.94 A 39.093 39.093 0 0 1 20.581 31.585 A 46.665 46.665 0 0 1 21.841 30.94 A 48.629 48.629 0 0 1 37.092 26.417 A 62.033 62.033 0 0 1 45.221 25.9 A 54.414 54.414 0 0 1 56.694 27.052 A 40.222 40.222 0 0 1 69.161 31.92 Q 79.101 37.94 82.881 48.58 Z"
//     id="0"
//     vectorEffect="non-scaling-stroke"
//   />
//   <path
//     d="M 174.721 60.2 L 174.721 103.88 L 143.081 103.88 L 143.081 65.66 A 31.929 31.929 0 0 0 142.903 62.158 Q 142.508 58.587 141.232 56.458 A 7.394 7.394 0 0 0 140.561 55.51 Q 138.041 52.5 133.701 52.5 Q 130.481 52.5 127.751 53.97 Q 125.021 55.44 123.411 58.8 A 14.127 14.127 0 0 0 122.43 61.655 Q 122.086 63.108 121.93 64.84 A 34.212 34.212 0 0 0 121.801 67.9 L 121.801 103.88 L 90.161 103.88 L 90.161 0 L 121.801 0 L 121.801 49.7 L 114.241 43.26 A 33.684 33.684 0 0 1 119.794 35.362 A 28.591 28.591 0 0 1 126.351 30.24 A 33.504 33.504 0 0 1 142.123 25.919 A 39.813 39.813 0 0 1 143.361 25.9 A 37.641 37.641 0 0 1 153.243 27.159 A 32.649 32.649 0 0 1 159.321 29.47 A 25.563 25.563 0 0 1 169.79 39.218 A 31.539 31.539 0 0 1 170.591 40.6 Q 173.923 46.698 174.567 55.711 A 63.004 63.004 0 0 1 174.721 60.2 Z"
//     id="1"
//     vectorEffect="non-scaling-stroke"
//   />
// </g>
// </svg>
