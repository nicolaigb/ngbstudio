import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'contentRow',
  title: 'Content Row',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'content',
        }),
      ],
      validation: (Rule) => Rule.required(),
      // Add the options for the array itself
      options: {
        layout: 'grid',
        imageOptions: {
          // Settings for array items (images) display
          showTitle: true,
          // The field to use as a "title" (will replace "Untitled")
          titleField: 'alt',
        },
      },
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      return {
        title: 'Content Row',
        subtitle: `${content?.length || 0} item${content?.length !== 1 ? 's' : ''}`,
      }
    },
  },
})
