import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import YouTube, { YouTubeProps } from "react-youtube";

function About() {
  const opts = {
    width: "100%",
    height: "310",
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <main>
      <Typography component="h2" variant="h5">
        What is the Pomodoro Technique?
      </Typography>
      <Typography component="p" variant="body1">
        The Pomodoro Technique was developed in the late 1980s by then
        university student Francesco Cirillo. Cirillo was struggling to focus on
        his studies and complete assignments. Feeling overwhelmed, he asked
        himself to commit to just 10 minutes of focused study time. Encouraged
        by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen
        timer, and the Pomodoro technique was born.
      </Typography>
      <Typography component="p" variant="body1" mt={4}>
        Its biggest strength is its simplicity:
      </Typography>
      <Box component="ul">
        <Typography component="li" variant="body1">
          Get a to-do list and a timer.
        </Typography>
        <Typography component="li" variant="body1">
          Set your timer for 25 minutes, and focus on a single task until the
          timer rings.
        </Typography>
        <Typography component="li" variant="body1">
          When your session ends, mark off one pomodoro and record what you
          completed.
        </Typography>
        <Typography component="li" variant="body1">
          Then enjoy a five-minute break.
        </Typography>
        <Typography component="li" variant="body1">
          After four pomodoros, take a longer, more restorative 15-30 minute
          break.
        </Typography>
      </Box>
      <YouTube videoId="dnt2lTdcn8g" opts={opts} onReady={onPlayerReady} />
    </main>
  );
}

export default About;
