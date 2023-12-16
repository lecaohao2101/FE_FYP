import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const ForgetPasswordPage = () => {
    useEffect(() => {
        document.title = 'Forget Password';
    }, []);
    return (
        <div className="bg-blue-900 flex items-center justify-center h-screen">
            <div className="bg-blue-800 text-white p-8 rounded-lg w-96">
                <h1 className="text-2xl font-semibold mb-6">Recover your password</h1>
                <p className="mb-4">Enter the email address you used to create your account</p>
                <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full p-2 rounded text-black"/>
                </div>
                <button className="bg-blue-500 w-full p-2 rounded text-white mb-4">Recover</button>
                <div className="text-center">
                    <Link to="/login" className="text-blue-300 hover:text-blue-200 text-sm">← Sign in</Link>
                </div>
            </div>
        </div>
    );
}
export default ForgetPasswordPage;