module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',

    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                useESM: false,
                tsconfig: 'tsconfig.json',
            },
        ],
    },
};
