import { Flex, Stack, Text, Heading, Image } from "@chakra-ui/react";
import bgImageSection1 from "../resources/images/bg1.jpg";
import unicornImg from "../resources/images/unicornImg.jpg";
import Button from "./ButtonBlob";
import OpenMailIcon from "../resources/icons/OpenMailIcon";

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
      backgroundPosition={["center"]}
      backgroundSize={["cover"]}
      id="home"
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        alignItems={["center", "center", "center"]}
        textAlign={["center"]}
        width={["320px", "320px", "400px", "430px", "430px"]}
        marginBlockStart={["0", "0", "0", "-100px", "-100px"]}
        backgroundColor={"#F5C9E2"}
        borderRadius={"15"}
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
        <Image
          // objectFit="cover"
          // boxShadow="lg"
          // border="solid 1px white"
          // position="absolute"
          // borderRadius="full"
          // height="120px"
          width="65%"
          // backgroundColor="red.100"
          // bottom="-46px"
          // transform="translateX(-50%)"
          // left="50%"
          src={unicornImg}
        />

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
        {/* <Heading
          as="h2"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Ice Cream <br /> Cakes
        </Heading>
        <Text
          fontSize="16px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry <br />
          with dummmy text. Graphics, Designing, Branding, Development
        </Text> */}
        <Button
        ><OpenMailIcon />Open Invitation</Button>
      </Stack>
    </Flex>
  );
}
