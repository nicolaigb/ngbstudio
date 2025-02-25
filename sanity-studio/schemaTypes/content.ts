import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Content',
  name: 'content',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
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
          {
            title: 'Embed',
            value: 'embed',
          },
        ],
      },
    },
    {
      title: 'Maximum width',
      name: 'maxWidth',
      type: 'number',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'file',
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
    defineField({
      title: 'Embbed Type',
      name: 'embedType',
      type: 'string',
      initialValue: 'appleMusic',
      options: {
        list: [
          {
            title: 'Apple Music',
            value: 'appleMusic',
          },
          {
            title: 'Youtube',
            value: 'youtube',
          },
          {
            title: 'Soundcloud',
            value: 'soundcloud',
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      type: 'type',
      media: 'image',
      caption: 'caption',
      alt: 'alt',
    },
    prepare({ type, media, caption, alt }) {
      // Map the type value to a more readable format if needed
      const typeMap = {
        image: 'Image',
        screenshot: 'Screenshot',
        video: 'Video',
        embed: 'Embed',
      }

      return {
        title: typeMap[type] || type,
        subtitle: caption || alt,
        media,
      }
    },
  },
})
