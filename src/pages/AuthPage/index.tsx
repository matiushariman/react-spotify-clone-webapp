import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getMeRequest } from './actions';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const AuthPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeRequest());
  }, []);

  return (
    <Box
      display="flex"
      flexGrow={1}
      sx={(theme) => ({
        background: theme.custom.background.gradient,
        color: theme.palette.common.white,
      })}
    >
      <Sidebar />
      <Box flexGrow={1}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthPage;
