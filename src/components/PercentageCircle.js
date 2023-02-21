import { Center, Stack } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

export default function PercentageCircle({ title, percentage }) {
  return (
    <Stack alignItems="center">
      <CircularProgress
        capIsRound="true"
        value={percentage}
        size="45px"
        color="candyPink.900"
        thickness={"4px"}
        trackColor="candyPink.900"
      >
        <CircularProgressLabel fontSize="22px" color="candyPink.900">
          {percentage}
        </CircularProgressLabel>
      </CircularProgress>
      <Center fontSize="body" color="candyPink.900">
        {title}
      </Center>
    </Stack>
  );
}
