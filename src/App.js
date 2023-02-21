import "aos/dist/aos.css";

import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section6 from "./components/Section6";
import Section8 from "./components/Section8";
import blackpink from "./resources/blackpink.mp3";
import theme from "./theme";

const data = {
  copyRight: `© ${new Date().getFullYear()}. carlosvargs.Made With Love by.`,
  dev: "Carlos Vargas",
};
export default function App() {
  const name = new URLSearchParams(window.location.search).get("name");
  const audio = new Audio(blackpink);
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const play = () => {
    if (!isPlay) {
      audio.loop = true;
      audio.play();
      setIsPlay(true);
    }
  };

  const show = () => {
    if (!isPlay) {
      return null;
    }
    return (
      <>
        <Section3 />
        <Section6 name={name} />
        <Section8 />
        <Footer data={data} />
      </>
    );
  };
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Section1 onClickOpen={play} name={name} />
        {show()}
      </Layout>
    </ChakraProvider>
  );
}
