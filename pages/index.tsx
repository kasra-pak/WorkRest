import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import useCountdown from "@/hooks/useCountdown";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

export default function Home() {
  const { seconds } = useCountdown(240);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <ToggleBtn />
        <Countdown seconds={seconds} />
      </Container>
    </>
  );
}
