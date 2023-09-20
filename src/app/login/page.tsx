"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);


    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user);
            console.log("login success", response.data);
            toast.success("login success")
            router.push('/profile')
        } catch (error: any) {
            console.log("login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">

            <h1>{loading ? 'Processing' : 'LoginPage'}</h1>
            <hr />


            <label htmlFor="email">email</label>
            <input
                className='p-3 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='email'
                type='email'
                value={user.email}
                onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                placeholder='enter your user name'
            />



            <label htmlFor="password">password</label>
            <input
                className='p-3 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='password'
                type='password'
                value={user.password}
                onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                placeholder='enter your user name'
            />

            <button
                onClick={onLogin}
                className="bg-blue-600 p-3 rounded-lg hover:bg-yellow-300 hover:text-black">

                {loading ? 'Login Now...' : 'Login Now'}
            </button>

            <h1>samimhos@gmail.com</h1>
            <Link href='/signup'>
                visit to login
            </Link>
        </div>
    );
};

