import { Flex, Heading, Stack } from "@chakra-ui/react";

import bgImageSection8 from "../resources/images/bgImageIce8.jpg";
import RatingCard from "./RatingCard";

const ratingCard = [
  {
    description:
      "Happy birthday Bebev !!! 😍😍😍😍😍😍 See u soon! So exited to be there! ☺☺☺",
    created_at: "14-October-2021",
  },
  {
    description:
      "Happy birthday Cutties  !!! 😍😍😍 See u soon! So exited to be there! ☺☺☺",
    created_at: "14-October-2021",
  },
];

export default function Section8() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${bgImageSection8})`}
      color="white"
      width="full"
      height="740px"
      // backgroundAttachment="fixed"
      className="smt"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      id="orderNow"
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      paddingBlock="120px"
      paddingInline={["20px", "20px", "20px", "116px", "116px"]}
    >
      <Stack
        textAlign={["center", "center", "center", "left", "left"]}
        maxWidth="512px"
        minWidth="260px"
        gridGap="16px"
      >
        <div
          data-aos="fade-up" //Here you can use any of the AOS animations
        >
          <Heading
            as="h3"
            fontSize="3rem"
            color="white"
            fontFamily={"'Mrs Saint Delafield', cursive"}
          >
            Wishes
          </Heading>
        </div>
        {ratingCard.map((card, key) => (
          <div
            data-aos="zoom-in-up" //Here you can use any of the AOS animations
          >
            <RatingCard key={key} data={card} />
          </div>
        ))}
      </Stack>
    </Flex>
  );
}
