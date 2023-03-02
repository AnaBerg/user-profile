import { User } from "@/types/user";
import { faker } from "@faker-js/faker";

const generateSkills = () => ({
  skill: faker.word.adjective(),
  percentage: Math.floor(Math.random() * 100) + 1,
});

export const generateUser = (override: Partial<User> = {}) => ({
  id: Number(faker.random.numeric(3)),
  name: faker.name.fullName(),
  role: faker.name.jobTitle(),
  score: Math.floor(Math.random() * 100) + 1,
  hardSkills: [generateSkills(), generateSkills(), generateSkills()],
  softSkills: [generateSkills(), generateSkills(), generateSkills()],
  icon: faker.image.avatar(),
  ...override,
});
