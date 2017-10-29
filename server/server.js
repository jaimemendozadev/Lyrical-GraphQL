require('dotenv').config();
const express = require('express');
const Router = require('./Router');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const path = require('path');

const app = express();

//Note: added static assets to express middleware to render React code
app.use(express.static(path.resolve(__dirname, '../client')));

// Replace with your mongoLab URI
const MONGO_URI = process.env.DB;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());

//Add Router middleware to enable React Router on frontend
app.use(Router);

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

/*
Notes:
- Removed webpack middleware from server code. 

- Webpack middleware was possibly preventing React Router from functioning on frontend. React components did not render when user switches browser URL on frontend.
*/

module.exports = app;
