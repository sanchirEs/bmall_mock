import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { HeartStraight, ShoppingCart, UserCircle } from "phosphor-react";
import LoginPage from '../../Pages/LoginPage';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };

  return (
    <>
    <div>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <HeartStraight size={36} color="#c70a83" weight="thin" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
        onClick={handleClose} 
        component={LoginPage}
        href="https://www.toyota.com/priusprime/" > 
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      
    </div>
    <div>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <ShoppingCart size={36} color="#c70a83" weight="thin" />
      </Button>
      
    </div>
    <div>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <UserCircle size={36} color="#c70a83" weight="thin" />
      </Button>
      {/* {<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Захиалга</MenuItem>
        <MenuItem onClick={handleClose}>Сонирхсон</MenuItem>
        <MenuItem onClick={handleClose}>Бараа буцаалт</MenuItem>
        <MenuItem onClick={handleClose}>Нууц үг солих</MenuItem>
        <MenuItem onClick={handleClose}>Таны бүртгэл</MenuItem>
        <MenuItem onClick={handleClose}>Тусламж</MenuItem>
      </Menu>} */}

      
    </div>
    </>
    
  );
}
