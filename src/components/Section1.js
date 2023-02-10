import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import OpenMailIcon from "../resources/icons/OpenMailIcon";
import bgImageSection1 from "../resources/images/bg1.jpg";
import unicornImg from "../resources/images/unicornCelebrate.png";
import Button from "./ButtonBlob";

// import unicornRainbow from "../resources/images/unicornRainbow.png";
export default function Section1() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="auto"
      className="smt"
      paddingBlock="120px"
      // paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      height="740px"
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
        marginBlockStart={["0", "0", "0", "-100px", "-100px"]}
        backgroundColor={"#F5C9E2"}
        borderRadius={"50"}
      >
        <Text
          fontWeight={"extrabold"}
          color="candyPink.900"
          fontFamily={"'Pacifico', cursive"}
          fontSize={"42px"}
        >
          Chelsea's
        </Text>
        <Text
          fontWeight={"extrabold"}
          fontFamily={"'Pacifico', cursive"}
          fontSize={"28px"}
          fontStyle={"italic"}
        >
          Birthday Pastry
        </Text>
        <Image width="75%" src={unicornImg} />

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
        {/* <Image
          width="auto"
          height={["180px", "180px", "180px", "230px", "230px"]}
          position="absolute"
          src={unicornRainbow}
          right={["-5%", "-5%", "19%", "5%", "25%"]}
          bottom={["35px", "35px", "35px", "15px", "15px"]}
        /> */}
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
