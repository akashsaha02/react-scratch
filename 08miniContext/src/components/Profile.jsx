import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return (
        <div className=' mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Please Login</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    )

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">

            <div className="flex flex-col items-center pb-10 pt-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={user.username} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">User</span>
            </div>
        </div>
    )
}

export default Profile
