import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./components/Layout";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import theme from "./theme";
import blackpink from "./resources/blackpink.mp3"
import { useEffect, useState } from "react";

export default function App() {
  const audio = new Audio(blackpink);
  const [isPlay, setIsPlay] = useState(false)

  const play = () => {
    if (!isPlay) {
      audio.loop = true;
      audio.play()
      setIsPlay(true)
    }
  }


  // console.log(seconds)
  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <div onClick={() => { play() }}> */}
      <Layout>
        {/* <audio src={blackpink} onCanplay={canplayEvent} onEnded={endedEvent} /> */}
        <Section1 />
        {/* <SectionTwo /> */}
        <Section3 />
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        <Section6 />
        <Section8 />
        <Section7 />
        {/* <Section9 /> */}
      </Layout>
      {/* </div> */}
    </ChakraProvider>
  );
}
