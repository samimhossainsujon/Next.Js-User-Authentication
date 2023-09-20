"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user])

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log('Signup success', response.data);
            router.push('/login');
        } catch (error: any) {
            console.error('Signup failed', error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1>{loading ? 'Processing' : 'Sign up'}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className="p-3 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                }}
                placeholder="Enter your username"
            />

            <label htmlFor="email">Email</label>
            <input
                className="p-3 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}
                placeholder="Enter your email"
            />

            <label htmlFor="password">password</label>
            <input
                className="p-3 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}
                placeholder="Enter your password"
            />

            <button
                onClick={onSignup}
                className="bg-blue-600 p-3 rounded-lg hover:bg-yellow-300 hover:text-black"
                disabled={buttonDisabled}
            >
                {loading ? 'Signing up...' : 'Sign up'}
            </button>
            <Link href="/login">Visit the login page</Link>
        </div>
    );
}
