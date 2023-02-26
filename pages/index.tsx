import { useState } from "react";
import Box from "@mui/material/Box";

import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

interface HomeProps {
  timers: {
    pomodoroSeconds: number;
    isPomodoroPaused: boolean;
    playPausePomodoro: () => void;
    resetPomodoro: (sec?: number) => void;
    shortBreakSeconds: number;
    isShortBreakPaused: boolean;
    playPauseShortBreak: () => void;
    resetShortBreak: (sec?: number) => void;
    longBreakSeconds: number;
    isLongBreakPaused: boolean;
    playPauseLongBreak: () => void;
    resetLongBreak: (sec?: number) => void;
  };
}

function Home({ timers }: HomeProps) {
  const {
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
  } = timers;

  const [timer, setTimer] = useState<Timers>("pomodoro");

  const handleTimerChange = (
    e: React.MouseEvent<HTMLElement>,
    newValue: Timers
  ) => {
    if (newValue !== null) {
      setTimer(newValue);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <ToggleBtn value={timer} handleChange={handleTimerChange} />

      {timer === "pomodoro" && (
        <Countdown
          seconds={pomodoroSeconds}
          paused={isPomodoroPaused}
          playPause={playPausePomodoro}
          reset={resetPomodoro}
        />
      )}

      {timer === "short-break" && (
        <Countdown
          seconds={shortBreakSeconds}
          paused={isShortBreakPaused}
          playPause={playPauseShortBreak}
          reset={resetShortBreak}
        />
      )}

      {timer === "long-break" && (
        <Countdown
          seconds={longBreakSeconds}
          paused={isLongBreakPaused}
          playPause={playPauseLongBreak}
          reset={resetLongBreak}
        />
      )}
    </Box>
  );
}

export default Home;
