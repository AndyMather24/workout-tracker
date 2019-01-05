import React from 'react';
import { Link } from '@reach/router'

const Navbar = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='Tracker/1'> Week 1 </Link>
        </div>
    );
};

export default Navbar;