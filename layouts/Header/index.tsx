import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import QuestionMark from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";

import tomatoImg from "public/images/tomato.svg";

interface HeaderProps {
  toggleModal: () => void;
}

const Header = ({ toggleModal }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
        padding: "1em 0",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Box
        component={Link}
        href="/"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".75em",
          textDecoration: "none",
        }}
      >
        <Image src={tomatoImg} alt="tomato" width={40} />
        <Typography component="h1" variant="h4" color="primary">
          Pomodoro
        </Typography>
      </Box>

      <Box>
        <IconButton color="secondary" onClick={toggleModal}>
          <SettingsIcon />
        </IconButton>
        <Link href="/about">
          <IconButton color="secondary">
            <QuestionMark />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
