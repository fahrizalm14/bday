import "../styles/timeline.css";

import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import bgImageSection3 from "../resources/images/bdayBg.jpg";
import imageProfile from "../resources/images/profileReview.jpg";
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
      // backgroundPosition={["center", "center", "center", "inherit", "inherit"]}
      backgroundSize="cover"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
      // backgroundAttachment="fixed"
    >
      <Stack
        textTransform="capitalize"
        textAlign={["center"]}
        // marginInline={["auto", "auto", "auto", "0", "0"]}
        marginX="2.5"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        borderRadius="15px"
        padding="20px"
      >
        <Stack textAlign={["start"]}>
          <div className="container-line">
            <div className="wrapper">
              <Text fontSize="22px" textAlign="center" color="candyPink.900">
                Chelsea's Journey
              </Text>
              <ul className="sessions">
                <li>
                  <Image
                    objectFit="cover"
                    boxShadow="lg"
                    border="solid 1px white"
                    borderRadius="full"
                    height="120px"
                    width="120px"
                    backgroundColor="red.100"
                    src={imageProfile}
                  />
                  <p>
                    Dolore labore ad elit sit sint elit in labore labore aute id
                    ullamco.
                  </p>
                </li>
                <li>
                  <Image
                    objectFit="cover"
                    boxShadow="lg"
                    border="solid 1px white"
                    borderRadius="full"
                    height="120px"
                    width="120px"
                    backgroundColor="red.100"
                    src={imageProfile}
                  />
                  <p>
                    Nisi cillum ad velit nostrud sunt pariatur proident labore
                    cillum officia et mollit id.
                  </p>
                </li>
                <li>
                  <Image
                    objectFit="cover"
                    boxShadow="lg"
                    border="solid 1px white"
                    borderRadius="full"
                    height="120px"
                    width="120px"
                    backgroundColor="red.100"
                    src={imageProfile}
                  />
                  <p>
                    Exercitation duis occaecat nostrud in consectetur ex et
                    mollit irure nostrud voluptate sit consequat.
                  </p>
                </li>
                <li>
                  <Image
                    objectFit="cover"
                    boxShadow="lg"
                    border="solid 1px white"
                    borderRadius="full"
                    height="120px"
                    width="120px"
                    backgroundColor="red.100"
                    src={imageProfile}
                  />
                  <p>How can I feel sleepy again?😵</p>
                </li>
              </ul>
            </div>
          </div>
        </Stack>
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
