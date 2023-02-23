import { useState } from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SettingsModal from "@/components/SettingsModal";

import Header from "@/layouts/Header";
import { theme } from "@/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
        <SettingsModal
          isModalOpen={isSettingOpen}
          closeModal={closeSettingsModal}
        />
      </Container>
    </ThemeProvider>
  );
}
