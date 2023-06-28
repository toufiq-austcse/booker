import { useAuth } from '../contexts/useAuth.jsx';
import { Redirect, Route } from 'react-router-dom';

export default function PublicRoute({ component: Component, ...rest }) {
  console.log('called PublicRoute ');
  const { isLoggedIn } = useAuth();
  console.log('called PublicRoute ', isLoggedIn);
  return isLoggedIn ? (<Redirect to='/' />) : (
    <Route {...rest}>{
      (props) => <Component {...props} />
    }
    </Route>
  );

}