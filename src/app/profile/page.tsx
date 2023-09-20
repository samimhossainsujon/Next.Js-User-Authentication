"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const router = useRouter()

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('logout successful')
            router.push('/login')

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)

        }

    }
    return (
        <div className="flex justify-center items-center min-h-screen flex-col py-2">
            <h1>ProfilePage</h1>
            <button
                onClick={logout}
                className='bg-blue-500 hover:bg-yellow-300 text-white hover:text-black p-3 rounded-lg mt-16'>
                Logout
            </button>
        </div>
    );
};

export default ProfilePage;