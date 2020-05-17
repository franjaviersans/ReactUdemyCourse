"use strict";
/*jshint esversion: 6 */
/*jshint node: true */

const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig_jest.json");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "enzyme",
  //testRegex: "store\\reducers\\auth.test.tsx",
  // testRegex: "\\*.(spec|test).(ts|tsx)?$",
  testRegex: ".*.test.(ts|tsx)?$",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
  transform: {
    "\\.(resx)$": "jest-raw-loader",
  },
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig_jest.json",
      isolatedModules: true,
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
