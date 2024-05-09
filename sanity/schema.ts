import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import work from './schemaTypes/work'
import lately from './schemaTypes/lately'
import content from './schemaTypes/content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, lately, blockContent, content],
}
