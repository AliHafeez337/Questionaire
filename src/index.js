import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Questionaire from './resolvers/Questionaire'
import Question from './resolvers/Question'
import Answer from './resolvers/Answer'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Questionaire,
        Question,
        Answer
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up on port 4000.!')
})