import { useState, useEffect } from "react";

const useCountdown = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
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
  }, []);

  return { seconds };
};

export default useCountdown;
