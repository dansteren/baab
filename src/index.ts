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

  const port = process.env.PORT || 4000

  server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
})()
