import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';

const Login = ({ onLogin }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("Google Sign-In Success:", user); // Debug log
                setError('');
                setSuccessMessage('Login successful! Redirecting...');
                setTimeout(() => {
                    onLogin(user);
                    navigate('/'); // Redirect after short delay
                }, 2000);
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error.message);
                setError("Google Sign-In failed. Please try again.");
                setSuccessMessage(''); // Clear success message on error
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Sign-Up Success:", user); // Debug log
                    setSuccessMessage('Sign-Up successful!!');
                })
                .catch((error) => {
                    console.error("Sign-Up Error:", error.message);
                    setError("Sign-Up failed. Please check your details and try again.");
                    setSuccessMessage(''); // Clear success message on error
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Login Success:", user); // Debug log
                    setSuccessMessage('Login successful!! Redirecting...');
                    setTimeout(() => {
                        navigate('/'); // Redirect after short delay
                    }, 2000);
                })
                .catch((error) => {
                    console.error("Login Error:", error.message);
                    setError("The email or password is incorrect. Please try again.");
                    setSuccessMessage(''); // Clear success message on error
                });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-bold text-center">{isSignUp ? "Sign Up" : "Login"}</h2>
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <button
                    onClick={handleLogin}
                    className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    Login with Google
                </button>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-blue-500 hover:underline"
                    >
                        {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
