import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { pad } from "@/utils";

const Countdown = ({ seconds }: { seconds: number }) => {
  const initialMinutes = Math.floor(seconds / 60);
  const initialSeconds = seconds % 60;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, p: 2 }}>
      <Paper sx={{ p: 1 }}>
        {pad(initialMinutes)}:{pad(initialSeconds)}
      </Paper>
    </Box>
  );
};

export default Countdown;
