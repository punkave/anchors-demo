var path = require('path');

var apos = require('apostrophe')({
  shortName: 'anchor-demo',

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-anchors': {},
    'apostrophe-id-field-type': {},
    'menu-widgets': {
      anchors: false
    }
  }
});
