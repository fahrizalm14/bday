import { Flex, Heading, Stack } from "@chakra-ui/react";

import bgImageSection6 from "../resources/images/bgImageIce6.jpg";
import OrderForm from "./OrderForm";

export default function Section6({ name }) {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${bgImageSection6})`}
      color="white"
      width="full"
      as="section"
      paddingBlock="120px"
      height={["auto", "auto", "auto", "740px", "740px"]}
      // backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="pricing"
      justifyContent={["center", "center", "center", "center", "flex-end"]}
      className="smt"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
    >
      <div
        data-aos="zoom-in" //Here you can use any of the AOS animations
      >
        <Stack alignItems="center" textAlign="center">
          <Heading
            as="h3"
            fontSize="3rem"
            color="white"
            fontFamily={"'Mrs Saint Delafield', cursive"}
          >
            Reservation
          </Heading>
          <OrderForm name={name} />
        </Stack>
      </div>
    </Flex>
  );
}
