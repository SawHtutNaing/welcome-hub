import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Find Care', 'Log in', 'Join the Hub'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '10px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
        className=' !text-headline-s  !font-bold'
        >
          Wellcome Hub
        </Typography>
        <div style={{ display: 'flex', gap: '10px' }}>
          {pages.map((page) => (
            <button
              key={page}
              
              

              
              className={`${
                page === 'Join the Hub' ? '!text-white  bg-primary ' : 'text-primary border-primary border-2'
              }  text-button-m font-semibold  text-sm px-4  py-3  me-2 mb-2  rounded-button
              `}

              
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
