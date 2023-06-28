import { useAuth } from '../contexts/useAuth.jsx';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  console.log('called PrivateRoute ');
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Route {...rest}>{
      (props) => <Component {...props} />
    }
    </Route>
  ) : (<Redirect to='/login' />);

}