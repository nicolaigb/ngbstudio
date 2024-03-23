import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import work from './schemaTypes/work'
import content from './schemaTypes/content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, blockContent, content],
}
