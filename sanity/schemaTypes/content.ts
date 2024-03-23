import { defineType } from 'sanity'

export default defineType({
  title: 'Content',
  name: 'content',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          {
            title: 'Image',
            value: 'image',
          },
          {
            title: 'Screenshot',
            value: 'screenshot',
          },
          {
            title: 'Video',
            value: 'video',
          },
        ],
      },
    },
    {
      title: 'Content width',
      name: 'contentWidth',
      type: 'number',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
    },
  ],
})
