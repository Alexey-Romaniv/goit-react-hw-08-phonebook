import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo }) => {
  const token = useSelector(selectIsLoggedIn);
  return token ? children : <Navigate to={redirectTo} />;
};
