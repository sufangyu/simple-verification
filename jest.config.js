module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  collectCoverage: false,
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(ts)$': 'ts-jest',
  },
}
