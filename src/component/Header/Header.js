import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            {/* <Link to={'/'}>Home</Link>
            <Link to={'/friends'}>Friends</Link>
            <Link to={'/about'}>About</Link> */}
            <CustomLink className='nav-link' to={'/'}>Home</CustomLink>
            <CustomLink className='nav-link' to={'/friends'}>Friends</CustomLink>
            <CustomLink className='nav-link' to={'/about'}>About</CustomLink>
        </nav>
    );
};

export default Header;