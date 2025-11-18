import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
    preset: "ts-jest/presets/js-with-ts-esm",
    testEnvironment: "jest-environment-jsdom",

    extensionsToTreatAsEsm: [".ts", ".tsx"],

    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                useESM: true,
                tsconfig: "tsconfig.json",
            },
        ],
    },
};
