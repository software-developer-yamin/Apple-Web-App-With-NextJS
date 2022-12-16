// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import product from './product'
import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import {user, account} from 'next-auth-sanity/schemas'

export const schemaTypes = [
  product,
  category,
  blockContent,
  localeText,
  localeBlockContent,
  localeString,
  user,
  account,
]
