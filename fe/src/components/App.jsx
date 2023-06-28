import React from 'react';
import { Layout } from './Layout.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from '../contexts/useAuth.jsx';
import { Home } from './pages/Home.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { Bookmark } from './pages/Bookmark.jsx';

const App = () => {
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_APP_GRAPHQL_BASE_URL,
    credentials: 'include',
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
              <PrivateRoute exact path='/bookmarks/:id' component={Bookmark} />
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