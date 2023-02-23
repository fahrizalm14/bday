import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import { useCountdown } from "../hooks/useCoundown";
import OpenMailIcon from "../resources/icons/OpenMailIcon";
import bdayImg from "../resources/images/awal.png";
import bdayImg2 from "../resources/images/awal2.png";
import unicornImg from "../resources/images/carousel.jpg";
import footerImg from "../resources/images/footerImg.png";
import bgImageSection1 from "../resources/images/bgCloud.jpg";
import Button from "./ButtonBlob";
import PercentageCircle from "./PercentageCircle";

// import unicornRainbow from "../resources/images/unicornRainbow.png";
export default function Section1({ onClickOpen, name }) {
  const [days, hours, minutes, seconds] = useCountdown(1677988800000);

  const handleScrollTo = () => {
    onClickOpen();
    /** scroll into detail view */
    setTimeout(() => {
      const element = document.getElementById("scroll-line");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 1000);
  };
  return (
    <Stack
      // backgroundImage={`url(${bgImageSection1})`}
      justifyContent="center"
      alignItems="center"
      color="white"
      width="auto"
      height="100vh"
      backgroundSize={["cover"]}
      backgroundColor={"#F0B5B6"}
      id="home"
    >
      <Stack
        backgroundColor={"#FFF"}
        borderRadius="15px"
        width={["320px", "320px", "400px", "430px", "430px"]}
        borderTopEndRadius={"15px"}
        borderTopStartRadius={"15px"}
        marginTop="auto"
      >
        <Image
          src={bdayImg}
          height="auto"
          marginTop="3"
        />

        {days + hours + minutes + seconds <= 0 ? null : (
          <Flex
            justifyContent="center"
            gridGap="10px"
            flexWrap="wrap"
          >
            <PercentageCircle key={"1"} title={"Dy"} percentage={days} />
            <PercentageCircle key={"2"} title={"Hr"} percentage={hours} />
            <PercentageCircle key={"3"} title={"Mn"} percentage={minutes} />
            <PercentageCircle key={"4"} title={"Sc"} percentage={seconds} />
          </Flex>
        )}
        <Text
          fontSize="16px"
          fontStyle="italic"
          color="candyPink.900"
          borderColor="candyPink.900"
          borderBottomWidth="1px"
          background="white"
          alignSelf="center"
        >
          Hi <span className="name-s">{name}</span>, you are invited!
        </Text>
        <Button
          alignSelf="center" onClick={handleScrollTo}>
          <OpenMailIcon />
          Open Invitation
        </Button>
        <Image
          src={bdayImg2}
          height="auto"
          marginTop="3"
        />
      </Stack>
    </Stack>
  );
}
