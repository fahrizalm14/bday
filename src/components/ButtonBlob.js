import "../styles/ButtonBlob.css";

import { Box, Button } from "@chakra-ui/react";

function ButtonBlob({ children, blobColor = "white", onClick, ...rest }) {
  return (
    <>
      <Button className="blob-btn" variant="blob" onClick={onClick} {...rest}>
        {children}
        <Box
          as="span"
          zIndex="-1"
          overflow="hidden"
          position="absolute"
          left="0"
          top="0"
          width="full"
          height="full"
          borderRadius="3xl"
          // background="transparent"
          background={"#FF95B9"}
        >
          <Box
            position="relative"
            display="block"
            height="full"
            filter="url(#splash)"
          >
            {[1, 2, 3, 4].map((index) => (
              <Box
                as="span"
                key={index}
                className="blob-btn__blob"
                backgroundColor={blobColor}
              ></Box>
            ))}
          </Box>
        </Box>
      </Button>
    </>
  );
}

export default ButtonBlob;
