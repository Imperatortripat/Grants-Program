/**
 * Jest configuration for unit-testing the site's React components.
 *
 * A dedicated, test-only Babel transform is used (configFile: false) so the
 * tests do not depend on the Docusaurus Babel preset, which is tuned for the
 * production build rather than a jsdom test environment.
 */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    // CSS modules -> identity proxy so `styles.foo` returns the string "foo".
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Docusaurus/theme aliases that are unavailable outside the bundler.
    '^@theme/Layout$': '<rootDir>/test/__mocks__/@theme/Layout.js',
    '^@docusaurus/Link$': '<rootDir>/test/__mocks__/@docusaurus/Link.js',
    '^@docusaurus/useDocusaurusContext$':
      '<rootDir>/test/__mocks__/@docusaurus/useDocusaurusContext.js',
    // Deterministic stand-in for the animated CountUp component.
    '^react-countup$': '<rootDir>/test/__mocks__/react-countup.js',
  },
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        configFile: false,
        babelrc: false,
        presets: [
          ['@babel/preset-env', {targets: {node: 'current'}}],
          ['@babel/preset-react', {runtime: 'classic'}],
        ],
      },
    ],
  },
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.module.css',
  ],
  coverageDirectory: '<rootDir>/coverage',
};
