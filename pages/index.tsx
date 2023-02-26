import { useState } from "react";
import Box from "@mui/material/Box";

import useCountdown from "@/hooks/useCountdown";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

type Timers = "pomodoro" | "short-break" | "long-break";

function Home() {
  const [timer, setTimer] = useState<Timers>("pomodoro");
  const [pomodoroSeconds, isPomodoroPaused, playPausePomodoro] =
    useCountdown(1500);
  const [shortBreakSeconds, isShortBreakPaused, playPauseShortBreak] =
    useCountdown(300);
  const [longBreakSeconds, isLongBreakPaused, playPauseLongBreak] =
    useCountdown(900);

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
