import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./aboutscreenimages/moon.png";
import land from "./aboutscreenimages/land.png";
import cat from "./aboutscreenimages/cat.gif";
import demo from "./aboutscreenimages/demovideo.mp4";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
const AboutScreen = () => {
  return (
    <>
      <ParallaxSection withNavbar={true} />
    </>
  );
};

const ParallaxSection = ({ withNavbar }) => {
  console.log(withNavbar);
  const ref = React.useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref} className="parallax">
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        >
          {/* <Navbar onAbout={true} /> */}
        </ParallaxLayer>

        {withNavbar && (
          <ParallaxLayer sticky={{ start: 0, end: 0.1 }}>
            <Navbar onAbout={true} />
          </ParallaxLayer>
        )}

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.3, end: 2.7 }}
          style={{ textAlign: "center" }}
          className="sticky-layer"
        >
          <img src={cat} className="gif" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Your Journey begins here.</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div className="info">
            <div className="info-content">
              <h3>Keep track of your progress on your way to mastery.</h3>
              <div className="icon-container">
                <i className="fas fa-tasks fa-2x"></i>
                <i className="fas fa-chart-bar fa-2x"></i>
                <i className="fas fa-graduation-cap fa-2x"></i>
              </div>
              <p className="down-a-bit-4">
                When you see the hours in front of you, that's when you know
                that you really put in the work.
              </p>
            </div>
            <div className="spacer red-stacked-layer"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2.8, end: 2.9 }}
          className="video-holder"
        >
          <div className="info">
            <video src={demo} controls />
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={3} speed={0.05} className="video-holder">
          <div className="info">
            <video src={demo} controls />
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer
          className="end-layer"
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Good Luck!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export { AboutScreen, ParallaxSection };
