import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import OpenMailIcon from "../resources/icons/OpenMailIcon";
import bgImageSection1 from "../resources/images/candyPink.jpg";
import unicornImg from "../resources/images/carousel.jpg";
import bdayImg from "../resources/images/bday.png";
import footerImg from "../resources/images/footerImg.png";
import Button from "./ButtonBlob";
import PercentageCircle from "./PercentageCircle";
import { useCountdown } from "../hooks/useCoundown";


// import unicornRainbow from "../resources/images/unicornRainbow.png";
export default function Section1() {

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [days, hours, minutes, seconds] = useCountdown(1677988800000);
  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="auto"
      className="smt"
      paddingBlock={["100px", "100px", "100px", "120px", "120px"]}
      // paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      height="100vh"
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
        height="640px"
        marginBlockStart={["0", "0", "0", "-100px", "-100px"]}
        backgroundColor={"#FFF"}
        borderRadius={"20"}
      >
        <Image
          width={["60%", "60%", "60%", "50%", "50%"]} src={bdayImg}
        // marginTop={["80px", "80px", "0px", "0px", "0px"]}
        />
        {
          days + hours + minutes + seconds <= 0 ? null : (
            <Flex
              justifyContent="center"
              paddingBlockStart="4px"
              gridGap="12px"
              flexWrap="wrap"
            >
              <PercentageCircle
                key={"1"}
                title={"Dy"}
                percentage={days}
              />
              <PercentageCircle
                key={"2"}
                title={"Hr"}
                percentage={hours}
              />
              <PercentageCircle
                key={"3"}
                title={"Mn"}
                percentage={minutes}
              />
              <PercentageCircle
                key={"4"}
                title={"Sc"}
                percentage={seconds}
              />
            </Flex>
          )
        }
        <Image width="60%" src={unicornImg} />

        <Text
          fontSize="16px"
          fontStyle="italic"
          color="candyPink.900"
          borderColor="candyPink.900"
          borderBottomWidth="1px"
          paddingX="25px"
          background="white"
        >
          Hi Aneska, you are invited!
        </Text>
        <Button>
          <OpenMailIcon />
          Open Invitation
        </Button>
        <Image
          width="100%"
          // height={["180px", "180px", "180px", "230px", "230px"]}
          // position="inherit"
          src={footerImg}
        // right={["-5%", "-5%", "19%", "5%", "25%"]}
        />
        {/* <Image
          width="auto"
          height="20px"
          visibility="hidden"
          src={unicornRainbow}
        /> */}
      </Stack>
    </Flex>
  );
}
