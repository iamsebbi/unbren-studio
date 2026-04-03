import {defineType, defineField} from 'sanity'

export const creativeProject = defineType({
  name: 'creativeProject',
  title: 'Creative Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Numele proiectului de marketing/creație.',
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Numele clientului (ex: "Bold Brand").',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
})
