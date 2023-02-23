import { Center, Stack, Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

export default function PercentageCircle({ title, percentage }) {
  return (
    <Stack alignItems="center">
      <Text
        color="candyPink.900">
        {percentage}{title}
      </Text>
    </Stack>
  );
}
