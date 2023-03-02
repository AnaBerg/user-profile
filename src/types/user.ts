type Skills = {
  skill: string;
  percentage: number;
};

export type User = {
  id: number;
  name: string;
  role: string;
  score: number;
  hardSkills: Array<Skills>;
  softSkills: Array<Skills>;
  icon: string;
};
