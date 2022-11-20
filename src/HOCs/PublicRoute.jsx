import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log(isLoggedIn);
  return shouldRedirect ? <Navigate to="/" /> : children;
};
