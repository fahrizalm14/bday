import "../styles/timeline.css";

import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import img1 from "../resources/images/1.jpeg";
import img2 from "../resources/images/2.jpeg";
import img3 from "../resources/images/3.jpeg";
import img4 from "../resources/images/4.jpeg";
import img5 from "../resources/images/5.jpeg";
import img6 from "../resources/images/6.jpeg";
import img7 from "../resources/images/7.jpeg";
import img8 from "../resources/images/8.jpeg";
import img9 from "../resources/images/9.jpeg";
import bgImageSection3 from "../resources/images/bgImageIce7.jpg";
import cake from "../resources/images/cake.png";

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
      // paddingBlock="120px"
      // paddingInline={["0", "0", "0", "116px", "116px"]}
      // backgroundAttachment="fixed"
    >
      <Stack
        // textTransform="capitalize"
        textAlign={["center"]}
        marginInline={["auto", "auto", "auto", "0", "0"]}
        // marginX="2.5"
        // backgroundColor="rgba(255, 255, 255, 0.5)"
        borderRadius="15px"
        padding="20px"
        id="scroll-line"
      >
        <Stack>
          <div className="container-line">
            <div className="wrapper">
              <div
                data-aos="fade-up" //Here you can use any of the AOS animations
              >
                <Heading as="h3" fontSize="2.5rem" color="white">
                  Chelsea's Journey
                </Heading>
              </div>
              <ul className="sessions">
                <li>
                  <div
                    data-aos="zoom-in" //Here you can use any of the AOS animations
                  >
                    <p>Here is when I was born</p>
                  </div>
                  <div
                    data-aos="zoom-in-left" //Here you can use any of the AOS animations
                  >
                    <Image
                      className="square"
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img1}
                    />
                  </div>
                  <div
                    data-aos="zoom-in-right" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img2}
                    />
                  </div>
                  <div
                    data-aos="zoom-in-left" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img3}
                    />
                  </div>
                </li>
                <li>
                  <div
                    data-aos="zoom-in" //Here you can use any of the AOS animations
                  >
                    <p>and this is my 1st Birthday</p>
                  </div>
                  <div
                    data-aos="zoom-in-right" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img4}
                    />
                  </div>
                  <div
                    data-aos="zoom-in-left" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img5}
                    />
                  </div>
                  <div
                    data-aos="zoom-in-right" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img6}
                    />
                  </div>
                </li>
                <li>
                  <div
                    data-aos="zoom-in" //Here you can use any of the AOS animations
                  >
                    <p>and this was my 2nd Birthday</p>
                  </div>
                  <div
                    data-aos="zoom-in-left" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img7}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-right" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img8}
                    />
                  </div>

                  <div
                    data-aos="zoom-in-left" //Here you can use any of the AOS animations
                  >
                    <Image
                      objectFit="cover"
                      boxShadow="lg"
                      border="solid 1px white"
                      height="120px"
                      width="120px"
                      backgroundColor="red.100"
                      src={img9}
                    />
                  </div>
                </li>
                <li>
                  <div
                    data-aos="zoom-in" //Here you can use any of the AOS animations
                  >
                    <p>
                      And now you are invited to <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Stack>
        <div
          data-aos="fade-up" //Here you can use any of the AOS animations
        >
          <Stack
            boxShadow="lg"
            border="solid 1px white"
            // padding={"5px"}
            paddingTop="15px"
            // paddingBottom="15px"
            background={"rgba(255, 255, 255, 0.5)"}
            borderRadius="10px"
          >
            <div data-aos="zoom-in">
              <Heading
                fontSize={"2.5rem"}
                fontWeight="extrabold"
                color="#F0B5B6"
                fontFamily={'"Tangerine", cursive'}
              >
                Chelsea Parthree
              </Heading>
              <Heading
                // fontWeight="extrabold"
                fontSize={"1rem"}
                color="#F0B5B6"
                fontFamily="'Cinzel', serif"
              >
                SUNDAY, 5 March 2023
              </Heading>
            </div>
            <Image width="50%" src={cake} alignSelf="center" />
            <div data-aos="zoom-in">
              <Text
                color="#F0B5B6"
                textDecoration={"underline"}
                fontSize="1rem"
                fontFamily="'Cinzel', serif"
              >
                Posin Bakery & Cafe
              </Text>
              <Text
                fontSize="0.8rem"
                color="#50C1CC"
                fontFamily="'Cinzel', serif"
                marginX="2.5rem"
              >
                Jl Menteri Supeno No.6, Mugasari, Semarang Selatan
              </Text>
              <Text
                color="#50C1CC"
                fontFamily="'Cinzel', serif"
                fontWeight="extrabold"
                fontSize={"0.8rem"}
              >
                *Dresscode: Pastel Color
              </Text>
            </div>
            {/* <Text
              color="candyPink.900"
              textDecoration={"underline"}
              fontSize="1rem"
              fontFamily="'Cinzel', serif"
            >
              Posin Bakery & Cafe
            </Text>
            <Text
              fontSize="0.8rem"
              color="#4D4F58"
              fontFamily="'Cinzel', serif"
            >
              Jl Menteri Supeno No.6, Mugasari, Semarang Sel
            </Text> */}
            <div data-aos="zoom-in">
              <Button
                alignSelf={"center"}
                textTransform="capitalize"
                backgroundColor="#FF95B9"
                blobcolor="candyPink.900"
                textColor={"white"}
                _before="none"
                _hover={{ color: "white" }}
                _focus={{ color: "white" }}
                fontFamily="'Cinzel', serif"
                onClick={() => {
                  window.open(
                    "https://goo.gl/maps/2JVTD4guWNY6Nei68",
                    "_blank"
                  );
                }}
              >
                Get Directions
              </Button>
            </div>
            <div data-aos="zoom-in">
              <Stack alignSelf="center">
                <iframe
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.529488342481!2d110.4179067!3d-6.9936868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9da9322fca9f8642!2sPosin%20Bakery%20%26%20Cafe!5e0!3m2!1sen!2sid!4v1677015741946!5m2!1sen!2sid"
                  title="Posin Bakery &amp; Cafe"
                  aria-label="Posin Bakery &amp; Cafe"
                  frameBorder="0"
                ></iframe>
              </Stack>
            </div>
          </Stack>
        </div>
        {/* <Text
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
          <Stack>
            <iframe
              name="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            />
          </Stack> */}
      </Stack>
    </Flex>
  );
}
