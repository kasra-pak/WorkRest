import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";

import TomatoSVG from "public/images/tomato.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em 0",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".75em",
        }}
      >
        <TomatoSVG width="40px" fill={theme.palette.primary.main} />
        <Typography component="h1" variant="h4" color="primary">
          Pomodoro
        </Typography>
      </Box>
      <IconButton color="secondary">
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default Header;