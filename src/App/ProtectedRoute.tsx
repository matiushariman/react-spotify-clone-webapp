import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsUserAuthenticated } from './selectors';

export type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const isUserAuthenticated = useSelector(selectIsUserAuthenticated);

  // if the user is not logged in, redirect to home
  if (!isUserAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
