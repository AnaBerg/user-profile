module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/index.ts",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
