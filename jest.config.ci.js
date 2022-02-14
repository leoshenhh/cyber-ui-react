const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}"],
    reporters: ["default", "jest-junit"],
})

