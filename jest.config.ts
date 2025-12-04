import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

  // Needed for TSX and modern syntax
  globals: {
    'ts-jest': {
      useESM: false,
      tsconfig: 'tsconfig.jest.json',
      isolatedModules: true,
    },
  },
};

export default config;
