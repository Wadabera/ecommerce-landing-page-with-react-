import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from './Assets/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [open, setOpenMenu] = useState(false);

  // Menu options with navigation links
   const menuoption = [
     {
       text: "Home",
       icon: <HomeIcon />,
       link: "/"
     },
     {
       text: "About",
       icon: <InfoIcon />,
       link: "/about"
     },
     {
       text: "Testimonials",
       icon: <CommentRoundedIcon />,
       link: "/testimonials"
     },
     {
       text: "Contact",
       icon: <PhoneRoundedIcon />,
       link: "/contact"

     },
     {
       text: "Cart",
       icon: <ShoppingCartRoundedIcon />,
       link: "/cart"

     },
  ];

  return (
    <nav>
      {/* Logo */}
      <div className='nav-logo-container'>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Desktop links */}
     <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><BsCart2 className="navbar-cart-icon" /></Link>
        <button className="primary-button">Bookings Now</button>
      </div>

      {/* Mobile menu icon */}
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>    

      {/* Drawer (Sidebar) */}
      <Drawer open={open} onClose={() => setOpenMenu(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)}>
          <List>
            {menuoption.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar;
