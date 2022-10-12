import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const AboutScreen = () => {
  <div>
    <Parallax pages={4}>
      <ParallaxLayer>
        <h1>hello</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <h1>hi</h1>
      </ParallaxLayer>
    </Parallax>
  </div>;
};

export { AboutScreen };
