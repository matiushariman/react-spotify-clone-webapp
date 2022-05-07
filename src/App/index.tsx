import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import ExamplePage from 'pages/ExamplePage/Loadable';
import { NavigatorOnline } from 'services/NavigatorOnline';
import { Toast } from 'services/Toast';
import { AppBar } from './AppBar';

const App = (): JSX.Element => (
  <>
    <Helmet titleTemplate="%s - My App" />
    <AppBar />
    <Routes>
      <Route element={<ExamplePage />} path="/" />
    </Routes>
    <Toast />
    <NavigatorOnline />
  </>
);

export default App;
