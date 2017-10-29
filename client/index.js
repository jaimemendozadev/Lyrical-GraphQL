import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/App.js';
import SongCreate from './components/SongCreate.js';
import SongList from './components/SongList.js';

const client = new ApolloClient({});


ReactDOM.render(
  <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/songcreate" component={SongCreate} />
          <Route path="/songlist" component={SongList} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>, document.querySelector('#root'));
