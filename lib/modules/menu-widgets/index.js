module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Menu',
  addFields: [
    {
      name: 'items',
      label: 'Navigaiton Items',
      type: 'array',
      titleField: 'label',
      schema: [
        {
          type: 'string',
          name: 'label',
          label: 'Label',
        },
        {
          name: 'linkType',
          label: 'Link Type',
          type: 'select',
          choices: [
            { label: 'Internal Page', value: 'internal', showFields:['_page'] },
            { label: 'External Page', value: 'external', showFields:['url'] }
          ]
        },
        {
          name: 'url',
          label: 'External URL',
          type: 'url'
        },
        {
          name: '_page',
          label: 'Page to Link',
          type: 'joinByOne',
          withType: 'apostrophe-page',
          filters: {
            projection: {
              _url: 1,
              slug: 1,
              title: 1,
              type: 1
            }
          }
        },
        {
          type: 'id',
          name: 'anchor',
          label: 'Anchor ID',
          remoteIdsFields: ['_page', 'url'],
        }
      ]
    }
  ]
};
