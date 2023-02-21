import "../styles/timeline.css";

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import bgImageSection3 from "../resources/images/candyPink.jpg";
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
      className="smt"
      height={["auto", "auto", "auto", "auto", "auto"]}
      justifyContent="center"
      // backgroundAttachment="fixed"
      backgroundPosition={["center", "center", "center", "inherit", "inherit"]}
      backgroundSize="cover"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
    // backgroundAttachment="fixed"
    >
      <Stack
        textTransform="capitalize"
        textAlign={["center"]}
        marginInline={["auto", "auto", "auto", "0", "0"]}
        marginX="2.5"
        backgroundColor="rgba(255, 255, 255, 0.5)"
        borderRadius="15px"
        padding="20px"
      >
        <Stack >
          <div className="container-line">
            <div className="wrapper">
              {/* <Text fontSize="42px" fontWeight="extrabold" textAlign="center" color="candyPink.900">
                Chelsea's Journey
              </Text> */}
              <Heading as="h4" fontSize="40px" textTransform="capitalize" color="candyPink.900">
                Chelsea's Journey
              </Heading>
              <ul className="sessions">
                <li>
                  <p>
                    Chelsea's
                  </p>
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
                </li>
                <li>
                  <p>
                    Chelsea's Birthday
                  </p>
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
                </li>
                <li>
                  <p>
                    Chelsea's Birthday
                  </p>
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
                </li>
                <li>
                  <p>And now you ....</p>
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
        <Stack>
          <iframe
            name="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          />
        </Stack>
      </Stack>

    </Flex>
  );
}
