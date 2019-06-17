var path = require('path');

var apos = require('apostrophe')({
  shortName: 'anchor-demo',

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-anchors': {},
    'apostrophe-images-widgets': {
      addFields: [{
        type: 'string',
        name: 'title',
        label: 'Title'
      }],
      anchorDefault: 'title'
    },
    'apostrophe-anchor-field-type': {},
    'menu-widgets': {
      anchors: false
    }
  }
});
