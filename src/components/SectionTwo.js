import "../styles/timeline.css";

import { Flex, Stack, Text } from "@chakra-ui/react";

import bgImageSection1 from "../resources/images/bg1.jpg";
import PercentageCircle from "./PercentageCircle";

// import unicornRainbow from "../resources/images/unicornRainbow.png";
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
export default function SectionTwo() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="auto"
      className="smt"
      paddingBlock="120px"
      height="740px"
      backgroundPosition={["bottom"]}
      backgroundSize={["cover"]}
      id="home"
    >
      <Stack
        textTransform="capitalize"
        textAlign={["center"]}
        // marginInline={["auto", "auto", "auto", "0", "0"]}
        backgroundColor="rgba(255, 255, 255, 0.8)"
        borderRadius="15px"
        padding="20px"
      >
        <Stack>
          <div className="container-line">
            <div className="wrapper">
              <h1> A day in my 'sleepy' life 😅</h1>
              <ul className="sessions">
                <li>
                  <div className="time">09:00 AM</div>
                  <p>How is it already 9:00? Just how??? 🤯🤯</p>
                </li>
                <li>
                  <div className="time">09:05 AM</div>
                  <p>Few more minutes of sleep won't do anyone any harm 🤷..</p>
                </li>
                <li>
                  <div className="time">09:30 AM</div>
                  <p>Get up 🙄</p>
                </li>
                <li>
                  <div className="time">1:00 PM</div>
                  <p>How can I feel sleepy again?😵</p>
                </li>
                <li>
                  <div className="time">01:30 PM</div>
                  <p>
                    Lunch time after which sleep just doesn't want to let go of
                    me. 🤝
                  </p>
                </li>
                <li>
                  <div className="time">3:30 PM</div>
                  <p>
                    Drink the magical chai, it will ward off sleep they said.
                    🤷‍
                  </p>
                </li>
                <li>
                  <div className="time">4:30 PM </div>
                  <p>
                    The only time I don't feel sleepy cause it's work out time.
                    I mean walking time. 😹
                  </p>
                </li>
                <li>
                  <div className="time">07:00 PM </div>
                  <p>Food my tummy needs, sleep my body needs.👿</p>
                </li>
                <li>
                  <div className="time">07:30 PM </div>
                  <p>My tummy's happy time 🍝</p>
                </li>
                <li>
                  <div className="time">10:00 PM </div>
                  <p>
                    uh oh!!! fuel low, get some snacks but wait should I just
                    take a quick nap?🤓{" "}
                  </p>
                </li>
                <li>
                  <div className="time">2:30 PM </div>
                  <p>
                    All hail! The time to sleep has finally arrived.😴😴😴😴😴{" "}
                  </p>
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
