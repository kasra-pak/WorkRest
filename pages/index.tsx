import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import useCountdown from "@/hooks/useCountdown";
import Countdown from "@/components/Countdown";

export default function Home() {
  const { seconds } = useCountdown(240);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Countdown seconds={seconds} />
      </Container>
    </>
  );
}
