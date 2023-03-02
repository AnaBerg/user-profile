const { faker } = require("@faker-js/faker");
const fs = require("fs");

const writeOnJson = (jsonLocation, dataToWrite) => {
  fs.readFile(jsonLocation, "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    const parseData = JSON.parse(data);
    const json = JSON.stringify([...dataToWrite, ...parseData]);
    fs.writeFile(jsonLocation, json, "utf-8", (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
};

const generateSkills = () => ({
  skill: faker.word.adjective(),
  percentage: Math.floor(Math.random() * 100) + 1,
});

const generateUser = () => ({
  id: Number(faker.random.numeric(3)),
  name: faker.name.fullName(),
  role: faker.name.jobTitle(),
  score: Math.floor(Math.random() * 100) + 1,
  hardSkills: [generateSkills(), generateSkills(), generateSkills()],
  softSkills: [generateSkills(), generateSkills(), generateSkills()],
  icon: faker.image.avatar(),
});

const generateManyUsers = (amount = 3) =>
  Array.from({ length: amount }, () => generateUser());

writeOnJson("src/database/users.json", generateManyUsers());
console.log("Users added successuly!");
