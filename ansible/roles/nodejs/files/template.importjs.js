module.exports = {
  environments: ['node'],
  importDevDependencies: true,
  ignorePackagePrefixes: ['lodash.'],
  declarationKeyword: 'import',
  logLevel: 'debug',
  excludes: [
    './build/**',
    './lib/__mocks__/**',
  ]
};
