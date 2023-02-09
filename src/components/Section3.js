import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import bgImageSection3 from "../resources/images/bgFantasy.png";
import PercentageCircle from "./PercentageCircle";

const ourSpeciality = [
  {
    name: "Days",
    percentage: 80,
  },
  {
    name: "Hours",
    percentage: 90,
  },
  {
    name: "Minutes",
    percentage: 60,
  },
  {
    name: "Seconds",
    percentage: 60,
  },
];

export default function Section3() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection3})`}
      color="white"
      width="full"
      // className="smt"
      height={["auto", "auto", "auto", "auto", "auto"]}
      // backgroundAttachment="fixed"
      backgroundPosition={["center", "center", "center", "inherit", "inherit"]}
      backgroundSize="cover"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
    >
      <Stack
        textTransform="capitalize"
        textAlign={["center"]}
        marginInline={["auto", "auto", "auto", "0", "0"]}
        backgroundColor="rgba(255, 255, 255, 0.8)"
        borderRadius="15px"
        padding="20px"

      >
        <Text
          as="span"
          fontFamily="heading"
          fontSize="body"
          lineHeight="1.2"
          background="candyPink.900"
          color="white"
          padding="5px"
        >
          Remind Me
        </Text>
        <Flex
          justifyContent="center"
          paddingBlockStart="4px"
          gridGap="12px"
          flexWrap="wrap"
        >
          {ourSpeciality.map((speciality, key) => (
            <PercentageCircle
              key={key}
              title={speciality.name}
              percentage={0}
            />
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
}
