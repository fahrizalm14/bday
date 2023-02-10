// import "../styles/maps.css";s
import { Flex } from "@chakra-ui/react";

import bgImageSection4 from "../resources/images/bgImageIce4.jpg";

// const statistics = [
//   {
//     title: "events",
//     icon: <StarIcon />,
//     count: "35M",
//   },
//   {
//     title: "happy clients",
//     icon: <SmileBeamIcon />,
//     count: "70K",
//   },
//   {
//     title: "weddings",
//     icon: <GlassCheersIcon />,
//     count: "70K",
//   },
//   {
//     title: "custom cakes",
//     icon: <CakeIcon />,
//     count: "70K",
//   },
//   {
//     title: "Birthday Party",
//     icon: <CocktailIcon />,
//     count: "70K",
//   },
// ];

export default function Section4() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection4})`}
      color="white"
      height={["auto", "auto", "auto", "740px", "740px"]}
      paddingBlock="120px"
      className="smt"
      width="full"
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      // backgroundAttachment="fixed"
      backgroundPosition={["top"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      paddingInlineEnd={["0", "0", "0", "116px", "116px"]}
    >
      <Flex
        alignItems="center"
        gridGap="40px"
        alignContent="center"
        justifyContent="center"
        flexWrap="wrap"
        maxWidth="600px"
      >
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.7960741525!2d110.34702387378647!3d-7.024724603605692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1675957522448!5m2!1sen!2sid"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          title="map"
        /> */}
        {/* <AspectRatio ratio={16 / 9}> */}
        <iframe
          name="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
        />
        {/* </AspectRatio> */}
        {/* {statistics.map((statistic, key) => (
          <CardEvents
            key={key}
            statistic={statistic}
          />
        ))} */}
      </Flex>
    </Flex>
  );
}
