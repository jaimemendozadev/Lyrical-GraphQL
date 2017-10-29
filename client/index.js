import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexPage from './components/IndexPage.js';
import SongList from './components/SongList.js';

const client = new ApolloClient({});


ReactDOM.render(
  <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/songlist" component={SongList} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>, document.querySelector('#root'));
