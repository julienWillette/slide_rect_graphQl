import React from "react";
import { Badge } from "../style/elements";

export type SkillProps = {
  _id?: string;
  title: string;
  votes: number;
};

const Skill = ({ title, votes }: SkillProps): JSX.Element => {
  return (
    <li>
      {title}
      <Badge votes={votes}>{votes}</Badge>
    </li>
  );
};

export default Skill;
