import { useState } from "react";
import Box from "@mui/material/Box";

import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

type Timers = "pomodoro" | "short-break" | "long-break";

interface HomeProps {
  timers: {
    pomodoroSeconds: number;
    isPomodoroPaused: boolean;
    playPausePomodoro: () => void;
    shortBreakSeconds: number;
    isShortBreakPaused: boolean;
    playPauseShortBreak: () => void;
    longBreakSeconds: number;
    isLongBreakPaused: boolean;
    playPauseLongBreak: () => void;
  };
}

function Home({ timers }: HomeProps) {
  const {
    pomodoroSeconds,
    isPomodoroPaused,
    playPausePomodoro,
    shortBreakSeconds,
    isShortBreakPaused,
    playPauseShortBreak,
    longBreakSeconds,
    isLongBreakPaused,
    playPauseLongBreak,
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
        />
      )}

      {timer === "short-break" && (
        <Countdown
          seconds={shortBreakSeconds}
          paused={isShortBreakPaused}
          playPause={playPauseShortBreak}
        />
      )}

      {timer === "long-break" && (
        <Countdown
          seconds={longBreakSeconds}
          paused={isLongBreakPaused}
          playPause={playPauseLongBreak}
        />
      )}
    </Box>
  );
}

export default Home;
