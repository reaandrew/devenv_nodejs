module.exports = {
  environments: [
    'node',
    'mocha',
    'browser',
  ],
  importDevDependencies: true,
  ignorePackagePrefixes: ['lodash.'],
  declarationKeyword: 'const',
  logLevel: 'debug',
  excludes: [
    './build/**',
    './lib/__mocks__/**',
  ]
};
