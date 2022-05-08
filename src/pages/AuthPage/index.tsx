import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

const AuthPage = () => (
  <Box
    display="flex"
    flexGrow={1}
    sx={(theme) => ({
      background: theme.custom.background.gradient,
      color: theme.palette.common.white,
    })}
  >
    <Sidebar />
    <Outlet />
  </Box>
);

export default AuthPage;
