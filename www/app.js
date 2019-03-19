//top-level config script

requirejs.config({
    baseUrl: 'lib',
    paths: {
      app: '../app',
      jquery: 'jquery.min',
      handlebars: 'handlebars-v3.0.3',
      bootstrap: 'bootstrap.min',
      musicmetadata: 'musicmetadata'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
