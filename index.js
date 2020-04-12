import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
})

const root = {friend: () => {
    return {
        "id": 1234,
        "firstName": "name",
        "lastName": "lastName",
        "gender": "gender",
        "language": "English",
        "emails": [{
            "email": "aa@aa.com"
        },
        {
            "email": "bb@bb.com"
        }]
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(9000, () => console.log('Running server on port: localhost:9000/graphql'));