import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import { useCountdown } from "../hooks/useCoundown";
import OpenMailIcon from "../resources/icons/OpenMailIcon";
import bdayImg from "../resources/images/awal.png";
import bdayImg2 from "../resources/images/awal2.png";
import bgImageSection1 from "../resources/images/bgImageIce.jpg";
import Button from "./ButtonBlob";
import PercentageCircle from "./PercentageCircle";

// import PercentageCircle from "./PercentageCircle";

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
      backgroundImage={`url(${bgImageSection1})`}
      justifyContent="center"
      alignItems="center"
      color="white"
      width="auto"
      minHeight="100vh"
      backgroundSize={["cover"]}
      backgroundColor={"#F0B5B6"}
      id="home"
    >
      <Stack
        backgroundColor={"#FFF"}
        // borderRadius="15px"
        width={["320px", "320px", "400px", "430px", "430px"]}
        // borderBottomEndRadius={"1rem"}
        // borderBottomStartRadius={"3rem"}
        marginBottom="auto"
        // paddingBottom="1.5rem"
        minHeight="100vh"
      >
        <Image src={bdayImg} height="auto" />

        {days + hours + minutes + seconds <= 0 ? null : (
          <Flex justifyContent="center" gridGap="10px" flexWrap="wrap">
            <PercentageCircle key={"1"} title={"Dy"} percentage={days} />
            <PercentageCircle key={"2"} title={"Hr"} percentage={hours} />
            <PercentageCircle key={"3"} title={"Mn"} percentage={minutes} />
            <PercentageCircle key={"4"} title={"Sc"} percentage={seconds} />
          </Flex>
        )}
        <Image
          // position="absolute"
          // alignSelf="center"
          // width={["320px", "320px", "400px", "430px", "430px"]}
          src={bdayImg2}
        />
        <Text
          fontSize="1.5rem"
          fontStyle="italic"
          textAlign="center"
          color="#FF95B9"
          // backgroundColor="#FF95B9"
          // background="white"
          alignSelf="center"
          fontFamily={"'Mrs Saint Delafield', cursive"}
          textDecoration="underline"
        >
          Hi <span className="name-s">{name}</span>, you are invited!
        </Text>
        <Button
          alignSelf="center"
          onClick={handleScrollTo}
          fontFamily="'Cinzel', serif"
          fontSize="0.8rem"
        >
          <OpenMailIcon />
          Open Invitation
        </Button>
      </Stack>
    </Stack>
  );
}
