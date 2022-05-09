import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import AuthPage from 'pages/AuthPage';
import ProfilePage from 'pages/AuthPage/ProfilePage';
import HomePage from 'pages/HomePage';
import { NavigatorOnline } from 'services/NavigatorOnline';
import { Toast } from 'services/Toast';

import { ProtectedRoute } from './ProtectedRoute';

const App = (): JSX.Element => (
  <>
    <Helmet titleTemplate="%s - My App" />
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        element={
          <ProtectedRoute>
            <AuthPage />
          </ProtectedRoute>
        }
        path="auth"
      >
        <Route element={<ProfilePage />} path="profile" />
      </Route>
    </Routes>
    <Toast />
    <NavigatorOnline />
  </>
);

export default App;
