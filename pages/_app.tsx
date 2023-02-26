import { useState } from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SettingsModal from "@/components/SettingsModal";

import useCountdown from "@/hooks/useCountdown";
import Header from "@/layouts/Header";
import { theme } from "@/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const defaultPomodoroDuration = 25;
  const defaultShortBreakDuration = 5;
  const defaultLongBreakDuration = 15;

  const [pomodoroSeconds, isPomodoroPaused, playPausePomodoro, resetPomodoro] =
    useCountdown(defaultPomodoroDuration);
  const [
    shortBreakSeconds,
    isShortBreakPaused,
    playPauseShortBreak,
    resetShortBreak,
  ] = useCountdown(defaultShortBreakDuration);
  const [
    longBreakSeconds,
    isLongBreakPaused,
    playPauseLongBreak,
    resetLongBreak,
  ] = useCountdown(defaultLongBreakDuration);

  const timers = {
    pomodoroSeconds,
    isPomodoroPaused,
    playPausePomodoro,
    resetPomodoro,
    shortBreakSeconds,
    isShortBreakPaused,
    playPauseShortBreak,
    resetShortBreak,
    longBreakSeconds,
    isLongBreakPaused,
    playPauseLongBreak,
    resetLongBreak,
  };

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
        <Component timers={timers} close={closeSettingsModal} {...pageProps} />
        <SettingsModal
          defaultPomodoroDuration={defaultPomodoroDuration}
          defaultShortBreakDuration={defaultShortBreakDuration}
          defaultLongBreakDuration={defaultLongBreakDuration}
          resetPomodoro={resetPomodoro}
          resetShortBreak={resetShortBreak}
          resetLongBreak={resetLongBreak}
          isModalOpen={isSettingOpen}
          closeModal={closeSettingsModal}
        />
      </Container>
    </ThemeProvider>
  );
}
