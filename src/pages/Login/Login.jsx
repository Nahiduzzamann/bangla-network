import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => setErrorMessage(error.message));
    };
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => setErrorMessage(error.message));
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name='password'
                            id="password"
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full mb-4"
                    >
                        Log in
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-gray-600">or</p>
                    <button onClick={handleGoogleLogin} className="btn btn-primary w-full">
                        Sign in with Google
                    </button>
                    <p className="mt-2">
                        Don't have an account?{' '}
                        <Link to="/registration" className="text-blue-500 hover:underline">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
