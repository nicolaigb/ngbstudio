import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import content from './content'
import lately from './lately'
import work from './work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, content, lately, work],
}
