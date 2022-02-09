const config = {
    preset: 'ts-jest',
    verbose: true,
    clearMocks: false,
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}"],
    reporters: ["default"],
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|unit).[jt]s?(x)" ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};

module.exports = config;
