import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import useCountdown from "@/hooks/useCountdown";
import Header from "@/layouts/Header";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

import { theme } from "@/theme";

export default function Home() {
  const { seconds } = useCountdown(240);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <ToggleBtn />
        <Countdown seconds={seconds} />
      </Container>
    </ThemeProvider>
  );
}
