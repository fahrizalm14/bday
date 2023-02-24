import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { Center, Stack } from "@chakra-ui/react";

export default function PercentageCircle({ title, percentage }) {
  return (
    <Stack alignItems="center">
      <CircularProgress
        capIsRound="true"
        value={percentage}
        size="45px"
        color="#FF95B9"
        thickness={"4px"}
        trackColor="#FF95B9"
      >
        <CircularProgressLabel
          fontSize="22px"
          fontFamily="'Cinzel', serif"
          color="#FF95B9"
        >
          {percentage}
        </CircularProgressLabel>
      </CircularProgress>
      <Center fontSize="body" fontFamily="'Cinzel', serif" color="#FF95B9">
        {title}
      </Center>
    </Stack>
  );
}
