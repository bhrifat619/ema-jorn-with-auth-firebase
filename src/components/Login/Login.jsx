import React, { useContext } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
    const { logIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">EMail</label>
                    <input type="email" name="email" required id="email" />

                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" />

                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
            <p>Don't have an account?<Link to='/signup' >Create a new account.</Link></p>
        </div>
    );
};

export default Login;