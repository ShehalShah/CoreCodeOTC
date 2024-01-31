import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Navbar = () => {
    const [user, setUser] = useState(false)

    const handleGoogleSignIn = async () => {
        try {

            // Create a new GoogleAuthProvider instance
            const provider = new GoogleAuthProvider();

            // Sign in with Google using Firebase Auth
            const result = await signInWithPopup(auth, provider);

            // Set the user state with the signed-in user
            console.log(result.accessToken);
            setUser(result.user);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            // Sign out the user
            await auth.signOut();

            // Clear the user state
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    console.log(user);

    return (
        <div className=' bg-gray-800 text-white py-2 px-4 flex items-center justify-between'>
            {/* Left side - Search input */}
            <div className='flex items-center space-x-4'>
                {/* Replace the input with your search component */}
                <input
                    type='text'
                    placeholder='Search...'
                    className='border-none bg-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                />
            </div>

            {/* Right side - User info */}
            {user ?
                <div className='hidden md:flex items-center space-x-4'>
                    {/* User icon (Replace the content with your user icon component) */}
                    <div className=''>
                        <img
                            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                            alt=""
                            srcSet=""
                            className='bg-gray-600 w-8 h-8 rounded-full'
                        />
                    </div>

                    {/* User information */}
                    <div className='flex flex-col'>
                        <span className='text-sm'>{user.displayName}</span>
                        <span className='text-xs opacity-70'>{user.email}</span>
                    </div>

                    {/* Sign out button */}
                    <button
                        className='text-sm text-gray-300 hover:underline focus:outline-none'
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div> :
                <div className=''>
                    <button className='bg-blue-900 px-4 py-2 rounded-lg' onClick={handleGoogleSignIn}>Sign Up / Log In</button>
                </div>}
        </div>
    );
};

export default Navbar;
