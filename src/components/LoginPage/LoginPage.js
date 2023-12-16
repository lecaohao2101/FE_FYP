import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import loginImage from './images/login.png';

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Login Course of University';
    }, []);
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-10 shadow-lg min-h-full md:min-w-0 md:w-1/2">
                <h1 className="text-4xl font-bold mb-2 text-center">LOGIN</h1>
                <br/>
                <p className="text-white-700 mb-8">How to get started Course Online of University at?
                    <Link to="/register" className="text-blue-500 ml-auto font-bold"> Sign up!</Link>
                </p>
                <div className="space-y-4 ">
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <i className="fas fa-user text-gray-400 mr-2"></i>
                        <input
                            className="pl-2 border-none w-full bg-transparent outline-none"
                            placeholder="Username" type="text"/>
                    </div>

                    <div className="flex items-center py-2">
                        <Link to="/forget-password" className="text-blue-500 ml-auto font-bold">Forget Password?</Link>
                    </div>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <i className="fas fa-lock text-gray-400 mr-2"></i>
                        <input className="pl-2 border-none w-full bg-transparent outline-none" placeholder="Password"
                               type="password"/>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="rememberMe" className="mr-2"/>
                        <label htmlFor="rememberMe" className="text-black-500">Remember the account name</label>
                    </div>

                </div>
                <button
                    className="mt-8 mb-4 bg-blue-500 text-white py-2 px-6 rounded-full w-full hover:bg-blue-700 transition duration-300 ease-in-out">Login
                    Now
                </button>
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

            {/*className="hidden md:block md:w-1/2 lg:w-2/3*/}
            <div className="hidden md:block md:w-1/2">
                <img height="950" width="1000" src={loginImage}/>
            </div>
        </div>
    );
};
export default LoginPage;
