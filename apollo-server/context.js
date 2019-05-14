import { db } from './util/db'

// Context passed to all resolvers (third argument)
// req => Query
// connection => Subscription
// eslint-disable-next-line no-unused-vars
export default async ({ req, connection }) => {
  return {
    db: await db
  }
}
