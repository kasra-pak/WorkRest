import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

interface SettingsModalProps {
  isModalOpen: boolean;
  defaultPomodoroDuration: number;
  defaultShortBreakDuration: number;
  defaultLongBreakDuration: number;
  resetPomodoro: ResetTimer;
  resetShortBreak: ResetTimer;
  resetLongBreak: ResetTimer;
  closeModal: () => void;
}

const SettingsModal = ({
  isModalOpen,
  defaultPomodoroDuration,
  defaultShortBreakDuration,
  defaultLongBreakDuration,
  resetPomodoro,
  resetShortBreak,
  resetLongBreak,
  closeModal,
}: SettingsModalProps) => {
  const [pomodoroDuration, setPomodoroDuration] = useState(
    defaultPomodoroDuration
  );
  const [shortBreakDuration, setShortBreakDuration] = useState(
    defaultShortBreakDuration
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    defaultLongBreakDuration
  );

  const handleApply = () => {
    resetPomodoro(pomodoroDuration);
    resetShortBreak(shortBreakDuration);
    resetLongBreak(longBreakDuration);
  };

  return (
    <Dialog maxWidth="md" open={isModalOpen} onClose={closeModal}>
      <Box>
        <DialogTitle
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: 2,
            paddingBlock: 1,
          }}
        >
          <Typography component="h2" variant="h5">
            Settings
          </Typography>
          <IconButton color="primary" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ paddingInline: 2, paddingBlock: 1 }}>
          <Typography
            component="h3"
            variant="subtitle1"
            sx={{ paddingBottom: "1.25em" }}
          >
            TIME (MINUTES)
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1.25em",
            }}
          >
            <TextField
              type="number"
              variant="outlined"
              label="pomodoro"
              value={pomodoroDuration.toString()}
              onChange={(e) => {
                setPomodoroDuration(+e.target.value);
              }}
            />
            <TextField
              type="number"
              variant="outlined"
              label="short break"
              value={shortBreakDuration.toString()}
              onChange={(e) => {
                setShortBreakDuration(+e.target.value);
              }}
            />
            <TextField
              type="number"
              variant="outlined"
              label="long break"
              value={longBreakDuration.toString()}
              onChange={(e) => {
                setLongBreakDuration(+e.target.value);
              }}
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ paddingInline: 2, paddingBlock: 1 }}>
          <Button onClick={handleApply} color="secondary">
            Apply
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default SettingsModal;
