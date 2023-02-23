import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import useCountdown from "@/hooks/useCountdown";
import Header from "@/layouts/Header";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";
import SettingsModal from "@/components/SettingsModal";

import { theme } from "@/theme";

export default function Home() {
  const { seconds, playPause } = useCountdown(240);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const openSettingsModal = () => {
    setIsSettingOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header toggleModal={openSettingsModal} />
        <ToggleBtn />
        <Countdown seconds={seconds} playPause={playPause} />
        <SettingsModal
          isModalOpen={isSettingOpen}
          closeModal={closeSettingsModal}
        />
      </Container>
    </ThemeProvider>
  );
}
