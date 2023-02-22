import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Values = "pomodoro" | "short-break" | "long-break";

const ToggleBtn = () => {
  const [value, setValue] = useState<Values>("pomodoro");

  const handleChange = (e: React.MouseEvent<HTMLElement>, newValue: Values) => {
    setValue(newValue);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange}>
      <ToggleButton value="pomodoro">pomodoro</ToggleButton>
      <ToggleButton value="short-break">short break</ToggleButton>
      <ToggleButton value="long-break">long break</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtn;
