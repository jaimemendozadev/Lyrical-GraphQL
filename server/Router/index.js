//Create new Router file to enable routes for React Router on frontend

const Router = require('express').Router();
const path = require('path');

Router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});

/*
//Note: code above is the same as explicitly writing the 3 routes below

Router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});
  
Router.get('/songlist', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});

Router.get('/songcreate', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});
*/

module.exports = Router;