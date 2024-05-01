import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lately',
  title: 'Lately',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'isText',
      title: 'Is Text',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'content',
      hidden: ({ document }) => !!document?.isText,
    }),
  ],
})
