import { useState, useEffect } from "react";

const useCountdown = (
  initialSeconds: number
): [number, boolean, () => void, ResetTimer] => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (!paused) {
      let start = Date.now();

      const timer = setInterval(() => {
        const now = Date.now();
        const diff = Math.round((now - start) / 1000);

        setSeconds((prevState) => {
          if (prevState > 1) {
            return prevState - diff;
          } else {
            clearInterval(timer);
            return 0;
          }
        });

        start = now;
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [paused]);

  const playPause = () => {
    setPaused((prevState) => !prevState);
  };

  const reset: ResetTimer = (sec) => {
    if (sec !== undefined) {
      setSeconds(sec);
    } else {
      setSeconds(initialSeconds);
    }
    setPaused(true);
  };

  return [seconds, paused, playPause, reset];
};

export default useCountdown;
