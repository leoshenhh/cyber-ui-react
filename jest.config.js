
const config = {
    verbose: true,
    clearMocks: false,
    collectCoverage: false,
    reporters: ["default"],
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|unit).[jt]s?(x)" ]
};

module.exports = config;
