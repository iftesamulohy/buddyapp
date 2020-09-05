import React from 'react';
import {Button, AppBar, Tabs, Tab} from '@material-ui/core/';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
     <AppBar className="navbar">
        <Tabs>
            <Link to="/">
            <Tab label="Home"/>
            </Link>
          
          <Tab label="Blogs"/>
          <Tab label="About Us"/>
        </Tabs>
      </AppBar>
        </div>
    );
};

export default Navbar;