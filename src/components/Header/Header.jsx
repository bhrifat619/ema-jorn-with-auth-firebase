import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('Logged out');
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">SignUp</Link>
                {user ? <span>  Welcome {user.email} <button onClick={handleSignOut}>Log Out</button> </span> : <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;