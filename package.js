Package.describe({
  name: 'eindacords:jeplootjs',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'This package contains loot-generating methods, created by Joe Pollack in 2015.',
  // URL to the Git repository containing the source code for this package.
  git: 'github.com/eindacords/jeplootjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('jeplootjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('eindacords:jeplootjs');
  api.addFiles('/jeplootjs-tests.js', ['client', 'server']);
  api.addFiles('/jeplootjs.js', ['client', 'server']);
  api.export("JepLoot", ['client', 'server']);
});
