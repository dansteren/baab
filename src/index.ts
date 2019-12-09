import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { buildSchema } from 'type-graphql'
;(async () => {
  await createConnection()

  const server = new ApolloServer({
    schema: await buildSchema({ resolvers }),
    context: ({ req, res }) => ({ req, res })
  })

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
})()
