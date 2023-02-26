import { useState, useEffect } from "react";

const useCountdown = (initialMinutes: number) => {
  const initialSeconds = initialMinutes * 60;
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

  const reset: ResetTimer = (min) => {
    if (min !== undefined) {
      setSeconds(min * 60);
    } else {
      setSeconds(initialSeconds);
    }
    setPaused(true);
  };

  return [seconds, paused, playPause, reset] as const;
};

export default useCountdown;
