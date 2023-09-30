import React, { useContext, useState } from "react";
import './signup.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Signup = () => {

    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password != confirm) {
            setError('your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password boro kor bolod');
            return
        }
        setError('')
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up / Registar</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="email" />

                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" />

                </div>
                <div className="form-control">
                    <label htmlFor="password">confirm Password</label>
                    <input type="password" name="confirm" required id="confirm" />

                </div>
                <input className='btn-submit' type="submit" value="sign up" />
            </form>
            <p>Already have an account?<Link to='/login' >LogIn</Link></p>
            <p className="text-error">{error}</p>
        </div>
    )
}

export default Signup;