import React from "react";

import { Progress } from "../Progress/Progress";
import { Hearts } from "../Hearts/Hearts";

import { LIVES_COUNT } from "../../settings";

export const GameHeader = ({ value, max, errorsCount }) => {
  return (
    <>
      {/* <img src="img/pics-to-words.svg" width="112" height="16" alt="Pics to words" /> */}
      <Progress value={value} max={max} />
      <Hearts count={LIVES_COUNT} value={errorsCount} />
    </>
  );
};
