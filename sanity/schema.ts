import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import work from './schemaTypes/work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, blockContent],
}
