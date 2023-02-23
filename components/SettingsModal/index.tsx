import SimpleDialog from "@mui/material/Dialog";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface SettingsModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
const SettingsModal = ({ isModalOpen, closeModal }: SettingsModalProps) => {
  return (
    <SimpleDialog
      // selectedValue={selectedValue}
      maxWidth="md"
      open={isModalOpen}
      onClose={closeModal}
    >
      <Box>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // p: "1em",
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
        <DialogContent>
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
              defaultValue={25}
            />
            <TextField
              type="number"
              variant="outlined"
              label="short break"
              defaultValue={5}
            />
            <TextField
              type="number"
              variant="outlined"
              label="long break"
              defaultValue={15}
            />
          </Box>
        </DialogContent>
      </Box>
    </SimpleDialog>
  );
};

export default SettingsModal;
