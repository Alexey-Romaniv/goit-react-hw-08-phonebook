import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo }) => {
  const token = useSelector(selectIsLoggedIn);
  console.log(redirectTo);
  console.log(token + '   !!!!!!!');
  return token ? children : <Navigate to={redirectTo} />;
};
