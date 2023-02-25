import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Timers = "pomodoro" | "short-break" | "long-break";

interface ToggleBtnProps {
  value: Timers;
  handleChange: (e: React.MouseEvent<HTMLElement>, newValue: Timers) => void;
}

const ToggleBtn = ({ value, handleChange }: ToggleBtnProps) => {
  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange}>
      <ToggleButton value="pomodoro">pomodoro</ToggleButton>
      <ToggleButton value="short-break">short break</ToggleButton>
      <ToggleButton value="long-break">long break</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtn;
