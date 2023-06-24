import React from 'react';
import { Layout } from './Layout.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, createHttpLink } from '@apollo/react-hooks';
import { AuthProvider } from '../contexts/useAuth.jsx';
import { Home } from './pages/Home.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

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
      <AuthProvider>
        <ApolloProvider client={client}>
          <Layout>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <PublicRoute exact path='/login' component={Login} />
              <PublicRoute exact path='/signup' component={Signup} />
            </Switch>
          </Layout>
        </ApolloProvider>
      </AuthProvider>

    </Router>
  );
};
export default App;