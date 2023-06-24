import React from 'react';
import { Layout } from './Layout.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, createHttpLink } from '@apollo/react-hooks';

const App = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return (
    <Router>
      <ApolloProvider client={client}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </Layout>
      </ApolloProvider>
    </Router>
  );
};
export default App;