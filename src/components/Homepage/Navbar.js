// HomePage.js
import React, {useState} from 'react';
import './HomePage.css'


const Navbar = () => {
    const [itDropdownOpen, setItDropdownOpen] = useState(false);
    const [graphicDesignDropdownOpen, setGraphicDesignDropdownOpen] = useState(false);
    const [marketingDropdownOpen, setMarketingDropdownOpen] = useState(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const toggleDropdown = (dropdownName) => {
        switch (dropdownName) {
            case 'it':
                setItDropdownOpen(!itDropdownOpen);
                setGraphicDesignDropdownOpen(false);
                setMarketingDropdownOpen(false);
                setCompanyDropdownOpen(false);
                break;
            case 'graphicDesign':
                setItDropdownOpen(false);
                setGraphicDesignDropdownOpen(!graphicDesignDropdownOpen);
                setMarketingDropdownOpen(false);
                setCompanyDropdownOpen(false);
                break;
            case 'marketing':
                setItDropdownOpen(false);
                setGraphicDesignDropdownOpen(false);
                setMarketingDropdownOpen(!marketingDropdownOpen);
                setCompanyDropdownOpen(false);
                break;
            case 'company':
                setItDropdownOpen(false);
                setGraphicDesignDropdownOpen(false);
                setMarketingDropdownOpen(false);
                setCompanyDropdownOpen(!companyDropdownOpen);
                break;
            default:
                break;
        }
        ;
    }
    return (
        <div>
            {/*Navbar*/}
            <div className="flex justify-between items-center py-4">
                <div className="flex space-x-4">
                    <img alt="Placeholder image representing a logo" className="h-12"
                         src="https://st.depositphotos.com/2885805/4596/v/450/depositphotos_45965695-stock-illustration-e-learning-concept-flat.jpg"/>

                    {/*IT*/}
                    <div className="flex space-x-2 dropdown">
                        <div className="relative">
                            <a
                                className="px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer font-bold mb-4"
                                onClick={() => toggleDropdown('it')}
                            >
                                Information Technology
                            </a>
                            {itDropdownOpen && (
                                <div className='dropdown-menu bg-white mt-2 p-2 rounded shadow'>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 1</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 2</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 3</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 4</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 5</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">See More...</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Graphic Design*/}
                    <div className="flex space-x-2 dropdown">
                        <div className="relative">
                            <a
                                className="px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer font-bold mb-4"
                                onClick={() => toggleDropdown('graphicDesign')}
                            >
                                Graphic Design
                            </a>
                            {graphicDesignDropdownOpen && (
                                <div className='dropdown-menu bg-white mt-2 p-2 rounded shadow'>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 1</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 2</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 3</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 4</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 5</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">See More...</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Marketing*/}
                    <div className="flex space-x-2 dropdown">
                        <div className="relative">
                            <a
                                className="px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer font-bold mb-4"
                                onClick={() => toggleDropdown('marketing')}
                            >
                                Maketing
                            </a>
                            {marketingDropdownOpen && (
                                <div className='dropdown-menu bg-white mt-2 p-2 rounded shadow'>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 1</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 2</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 3</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 4</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Subject 5</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">See More...</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Company*/}
                    <div className="flex space-x-2 dropdown">
                        <div className="relative">
                            <a
                                className="px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer font-bold mb-4"
                                onClick={() => toggleDropdown('company')}
                            >
                                Company
                            </a>
                            {companyDropdownOpen && (
                                <div className='dropdown-menu bg-white mt-2 p-2 rounded shadow'>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Company 1</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Company 2</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Company 3</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Company 4</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">Company 5</a>
                                    <a className="block text-gray-700 hover:text-gray-900 font-bold">See More...</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <input className="px-3 py-2 border border-gray-300" placeholder="Search" type="text"/>
                    <button className="button button-login">Login</button>
                    <button className="button button-register">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
