import React from 'react';
import loginImage from "./images/register.jpg";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-cente">
            <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-10 shadow-lg min-h-full md:min-w-0 md:w-1/2">
                <h1 className="text-4xl font-bold mb-2 text-center text-white">REGISTER</h1>
                <div className="space-y-4 mt-8">
                    {/*First Name*/}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <i className="fas fa-info-circle text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="First Name" type="text"/>
                    </div>

                    {/*Last Name*/}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <i className="fas fa-info-circle text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="Last Name" type="text"/>
                    </div>

                    {/*Email*/}
                    <div className="flex items-center justify-between border-2 py-2 px-3 rounded-2xl relative">
                        <i className="fas fa-envelope text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="Email" type="text"/>
                        <div className="absolute right-0 mr-2">
                            <Link to="/login" className="text-blue-500 ml-auto font-bold">Sign In!</Link>
                        </div>
                    </div>

                    {/*Password*/}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <i className="fas fa-key text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="Password" type="text"/>
                    </div>

                    {/*Re-Password*/}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <i className="fas fa-key text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="Re - Password" type="text"/>
                    </div>

                    {/*Register*/}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Register
                        </button>
                    </div>

                    {/*Login with*/}
                    <p className="text-center mb-4 font-bold">----------Login with Others----------</p>
                    <div className="flex flex-col space-y-4">
                        <button
                            className="flex items-center justify-center border-2 py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                            <i className="fab fa-google text-red-500 mr-2"></i>
                            Login with Google
                        </button>

                        <button
                            className="flex items-center justify-center border-2 py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                            <i className="fab fa-facebook text-blue-600 mr-2"></i>
                            Login with Facebook
                        </button>

                        <button
                            className="flex items-center justify-center border-2 py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                            <i className="fab fa-github text-blue-1000 mr-2"></i>
                            Login with Github
                        </button>
                    </div>
                </div>

            </div>

            <div className="hidden md:block md:w-1/2">
                <img height="950" width="1000" src={loginImage}/>
            </div>
        </div>

    );
}
export default RegisterPage;