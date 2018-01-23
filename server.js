import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';

const server = express();

mongoose.connect('mongodb://localhost/graphqlTutorial', {
    useMongoClient: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connection to database was successful');
});

const userCheck = (req, res) => req.header('token') === "123" ? req.next() : res.send(401);

// server.use(userCheck);
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

server.listen(3000, () => {
    console.log('listening on port 3000');
});