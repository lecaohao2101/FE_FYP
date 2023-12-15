// HomePage.js
import React from 'react';
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="container mx-auto px-4">
            <footer className="bg-gray-800 text-white p-8 mt-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-lg font-semibold">Connect with Us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Facebook</a>
                            <a href="#" className="hover:text-gray-300">Twitter</a>
                            <a href="#" className="hover:text-gray-300">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Newsletter</p>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input
                                className="px-3 py-2 border border-gray-600 rounded-l"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Contact Us</p>
                        <p>Email: lecaohao2101.com</p>
                        <p>Phone: +84 326475401</p>
                    </div>
                </div>
                <div className="mt-4 border-t border-gray-600 pt-4">
                    <p className="text-center text-sm">
                        © 2023 Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
