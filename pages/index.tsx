import { useState } from "react";

import useCountdown from "@/hooks/useCountdown";
import ToggleBtn from "@/components/ToggleBtn";
import Countdown from "@/components/Countdown";

type Timers = "pomodoro" | "short-break" | "long-break";

function Home() {
  const [timer, setTimer] = useState<Timers>("pomodoro");
  const [pomodoroSeconds, playPausePomodoro] = useCountdown(1500);
  const [shortBreakSeconds, playPauseShortBreak] = useCountdown(300);
  const [longBreakSeconds, playPauseLongBreak] = useCountdown(900);

  const handleTimerChange = (
    e: React.MouseEvent<HTMLElement>,
    newValue: Timers
  ) => {
    if (newValue !== null) {
      setTimer(newValue);
    }
  };

  return (
    <main>
      <ToggleBtn value={timer} handleChange={handleTimerChange} />

      {timer === "pomodoro" && (
        <Countdown seconds={pomodoroSeconds} playPause={playPausePomodoro} />
      )}

      {timer === "short-break" && (
        <Countdown
          seconds={shortBreakSeconds}
          playPause={playPauseShortBreak}
        />
      )}

      {timer === "long-break" && (
        <Countdown seconds={longBreakSeconds} playPause={playPauseLongBreak} />
      )}
    </main>
  );
}

export default Home;
