import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import { NavigatorOnline } from 'services/NavigatorOnline';
import { Toast } from 'services/Toast';

const App = (): JSX.Element => (
  <>
    <Helmet titleTemplate="%s - My App" />
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
    <Toast />
    <NavigatorOnline />
  </>
);

export default App;
