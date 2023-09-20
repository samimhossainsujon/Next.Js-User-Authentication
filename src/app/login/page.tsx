"use client"
    import Link from 'next/link';
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';
    import axios from 'axios';
    
    export default function LoginPage() {
        const [user, setUser] = useState({
            email: "",
            password: "",            
        })
        const onLogin = async () => {
    
        }
    
        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
                <h1 >LoginPage</h1>
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
                    Login Now
                </button>
                <Link href='/signup'>
                    visit to login
                </Link>
            </div>
        );
    };
    
    