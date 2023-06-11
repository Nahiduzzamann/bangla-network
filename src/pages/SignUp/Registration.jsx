import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        setIsLoading(true);

        const info = { displayName: name, photoURL: photoUrl };
        // Perform registration logic here
        if (name.trim() === '' || email.trim() === '' || password === '' || photoUrl.trim() === '') {
            // Empty fields error
            setErrorMessage('All fields are required');
            setIsLoading(false);
        } else {
            // Redirect to success page or desired page
            createUser(email, password)
                .then((result) => {
                    setErrorMessage('');
                    const user = result.user;

                    updateUser(info)
                        .then((result) => console.log(result))
                        .catch((error) => { });

                    navigate(from, { replace: true });
                })
                .catch((error) => setErrorMessage(error.message))
                .finally(() => setIsLoading(false));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Registration</h2>
                {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            className="input input-bordered w-full"
                            placeholder="Enter your photo URL"
                            name="photoUrl"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mb-4" disabled={isLoading}>
                        {isLoading ? (
                            <svg className="animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        ) : (
                            'Register'
                        )}
                    </button>
                    <p className="mt-2">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
