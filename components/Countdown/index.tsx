import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReplayIcon from "@mui/icons-material/Replay";

import { pad } from "@/utils";

interface CountdownProps {
  seconds: number;
  paused: boolean;
  playPause: () => void;
  reset: ResetTimer;
}

const Countdown = ({ seconds, paused, playPause, reset }: CountdownProps) => {
  const initialMinutes = Math.floor(seconds / 60);
  const initialSeconds = seconds % 60;

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginInline: "auto",
        width: "250px",
        aspectRatio: "1",
        borderRadius: "100%",
        userSelect: "none",
      }}
    >
      <Typography
        component="div"
        variant="h2"
        sx={{ fontWeight: "bold", letterSpacing: 1, textIndent: 1 }}
      >
        {pad(initialMinutes)}:{pad(initialSeconds)}
      </Typography>
      <Typography
        component="div"
        variant="subtitle1"
        align="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          letterSpacing: 10,
          textIndent: 10,
        }}
      />
      <Box sx={{ display: "flex" }}>
        <IconButton
          onClick={() => {
            reset();
          }}
        >
          <ReplayIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            playPause();
          }}
        >
          {paused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Countdown;
