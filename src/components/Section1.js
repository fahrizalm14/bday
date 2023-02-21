import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import { useCountdown } from "../hooks/useCoundown";
import OpenMailIcon from "../resources/icons/OpenMailIcon";
import bdayImg from "../resources/images/bday.png";
import unicornImg from "../resources/images/carousel.jpg";
import footerImg from "../resources/images/footerImg.png";
import bgImageSection1 from "../resources/images/iceCream.jpg";
import Button from "./ButtonBlob";
import PercentageCircle from "./PercentageCircle";

// import unicornRainbow from "../resources/images/unicornRainbow.png";
export default function Section1({ onClickOpen, name }) {
  const [days, hours, minutes, seconds] = useCountdown(1677988800000);

  // useEffect(() => {
  //   const element = document
  //     .getElementById("home")
  //     .addEventListener("scroll", () => {
  //       element.requestFullscreen();
  //     });
  // }, []);

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
      as="section"
      // position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="auto"
      className="smt"
      paddingBlock={["100px", "100px", "100px", "120px", "120px"]}
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      height="auto"
      // width={["16px", "16px", "16px", "116px", "116px"]}
      // backgroundAttachment="fixed"
      backgroundPosition={["bottom"]}
      backgroundSize={["cover"]}
      id="home"
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        marginTop="50px"
        alignItems={["center", "center", "center"]}
        textAlign={["center"]}
        width={["320px", "320px", "400px", "430px", "430px"]}
        // width="100%"
        height="auto"
        marginBlockStart={["-60px", "-60px", "-60px", "-100px", "-100px"]}
        backgroundColor={"#FFF"}
        // borderRadius={"20px"}
        borderTopEndRadius={"20px"}
        borderTopStartRadius={"20px"}
      >
        <Image
          width={["60%", "60%", "60%", "40%", "40%"]}
          paddingTop={["10", "10", "10", "5%", "5%"]}
          src={bdayImg}
          className="square-animation"
          // marginTop={["80px", "80px", "0px", "0px", "0px"]}
        />
        {days + hours + minutes + seconds <= 0 ? null : (
          <Flex
            justifyContent="center"
            paddingBlockStart="4px"
            gridGap="12px"
            flexWrap="wrap"
          >
            <PercentageCircle key={"1"} title={"Dy"} percentage={days} />
            <PercentageCircle key={"2"} title={"Hr"} percentage={hours} />
            <PercentageCircle key={"3"} title={"Mn"} percentage={minutes} />
            <PercentageCircle key={"4"} title={"Sc"} percentage={seconds} />
          </Flex>
        )}
        <Image width={["60%", "60%", "60%", "30%", "30%"]} src={unicornImg} />

        <Text
          fontSize="16px"
          fontStyle="italic"
          color="candyPink.900"
          borderColor="candyPink.900"
          borderBottomWidth="1px"
          paddingX="25px"
          background="white"
        >
          Hi <span className="name-s">{name}</span>, you are invited!
        </Text>
        <Button onClick={handleScrollTo}>
          <OpenMailIcon />
          Open Invitation
        </Button>
        <Image
          width="100%"
          // height={["180px", "180px", "180px", "230px", "230px"]}
          // position="inherit"
          src={footerImg}
          // zIndex={100}
          bottom={0}
          position="relative"
          // right={["-5%", "-5%", "19%", "5%", "25%"]}
        />
        {/* <Image
          width="auto"
          height="20px"
          visibility="hidden"
          src={unicornRainbow}
        /> */}
      </Stack>
    </Stack>
  );
}
