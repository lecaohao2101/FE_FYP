import React from 'react';
import './HomePage.css'

const Body = () => {
    return (
        <div className="flex">
            {/*COURE*/}
            <div className="w-1/4 pr-4">
                <div className="sticky top-0">
                    <div className="bg-gray p-4 mb-4">
                        <img alt="Placeholder image for a vertical banner" className="w-full"
                             height="600"
                             src="https://img.freepik.com/free-vector/online-courses-cartoon-advertising-web-page-with-students-sitting-books-pile-with-laptops-notebooks_1284-27827.jpg?w=1060&t=st=1702636303~exp=1702636903~hmac=3bbb2f502a529684b5905798a12867bbdc3a762d557923db98df8dd310fbf4e3"
                             width="200"/>
                    </div>

                    <div className="bg-fuchsia-100 p-4">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">COURSE</h2>

                        {/*IT*/}
                        <div className="mb-4">
                            <img alt="Placeholder image for a course thumbnail"
                                 className="w-full mb-2" height="200"
                                 src="https://lh3.googleusercontent.com/tbRv8ccBzDtMZGLdsyz5KCc5kvALg_vy_rXTe2_Iip8vqbvKjsvgIEXmmo_HqNZ5zY3JoVTC3xfggYfa30Am90cag1AFMnNk2Oz7EKUfjyT1jQtwiGaZtEbIj4QMDVdgzYzJCU1V0g41PZdqF9cEzA1Rh9LQwOEoI3SIOFY6Uc0vHoXvfpcAY9zp6LUbUw"
                                 width="200"/>
                            <p className="text-gray-700">
                                Information technology, abbreviated IT, is a branch of engineering that uses
                                computers and computer software to convert, store, protect, process, transmit, and
                                collect information.
                            </p>
                        </div>

                        {/*Graphic Design*/}
                        <div className="mb-4">
                            <img alt="Placeholder image for a course thumbnail"
                                 className="w-full mb-2" height="200"
                                 src="https://arena.fpt.edu.vn/wp-content/uploads/2018/12/do-hoa-1.jpg"
                                 width="200"/>
                            <p className="text-gray-700">
                                Graphic design is a term that refers to a major in fine arts. The noun "graphics"
                                refers to drawings displayed on a device, and the verb "design" includes
                                architectural and creative functions.
                            </p>
                        </div>

                        {/*Marketing*/}
                        <div className="mb-4">
                            <img alt="Placeholder image for a course thumbnail"
                                 className="w-full mb-2" height="200"
                                 src="https://www.vanphongao.vn/wp-content/uploads/2019/12/Marketing-v%C3%AC-m%E1%BB%A5c-%C4%91%C3%ADch-cao-%C4%91%E1%BA%B9p.jpg"
                                 width="200"/>
                            <p className="text-gray-700">
                                Marketing is a business process aimed at creating relationships and satisfying
                                customers. Focus on customers, one of the leading components of business management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Main*/}
            <div className="w-1/2 px-4">
                {/*Image Main*/}
                <div className="bg-amber-100 p-4 mb-4">
                    <img alt="Placeholder image for a main feature" className="w-full" height="400"
                         src="https://greenwich.edu.vn/wp-content/uploads/2020/07/greenwich-lot-top-8-truong-dai-hoc-hang-dau-the-gioi.jpg"
                         width="600"/>
                </div>

                <h2 className="text-gray-700 w-2/3 text-xl font-bold mb-4 text-right">Course Popular</h2>

                <div className="bg-amber-200 p-4 mb-4 flex">
                    <img alt="Placeholder image for a blog thumbnail" className="w-1/3 mr-4"
                         height="125"
                         src="https://dwtr67e3ikfml.cloudfront.net/bookCovers/716108d1-6de5-4283-9b7e-243907cd8f85.jpg__300x0"
                         width="200"/>
                    <p className="text-gray-700 w-2/3">
                        <b>Target audience:</b>Everyone
                        <br/>
                        <b>Content: </b>You will know the Python programming language even if you know
                        nothing about programming.
                        <br/>
                        <b>Result: </b>You will be able to carry out basic projects or solve algorithms
                        easily using the Python programming language.
                        <br/>
                        <b>Price: </b>Free
                    </p>
                </div>

                <div className="bg-amber-200 p-4 mb-4 flex">
                    <img alt="Placeholder image for a blog thumbnail" className="w-1/3 mr-4"
                         height="125"
                         src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51kSny3PWYS.jpg"
                         width="200"/>
                    <p className="text-gray-700 w-2/3">
                        <b>Target audience:</b>Everyone
                        <br/>
                        <b>Content: </b>You will know the Python programming language even if you know
                        nothing about programming.
                        <br/>
                        <b>Result: </b>You will be able to carry out basic projects or solve algorithms
                        easily using the Python programming language.
                        <br/>
                        <b>Price: </b>Free
                    </p>
                </div>

                <div className="bg-amber-200 p-4 mb-4 flex">
                    <img alt="Placeholder image for a blog thumbnail" className="w-1/3 mr-4"
                         height="125"
                         src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51jS9FBDy8L.jpg"
                         width="200"/>
                    <p className="text-gray-700 w-2/3">
                        <b>Target audience:</b>Everyone
                        <br/>
                        <b>Content: </b>You will know the Python programming language even if you know
                        nothing about programming.
                        <br/>
                        <b>Result: </b>You will be able to carry out basic projects or solve algorithms
                        easily using the Python programming language.
                        <br/>
                        <b>Price: </b>Free
                    </p>
                </div>
            </div>

            <div className="w-1/4 pl-4">
                <div className="sticky top-0">
                    <div className="bg-blue-100 p-4">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">BLOG</h2>

                        <div className="mb-4">
                            <img alt="Placeholder image for a blog sidebar item"
                                 className="w-full mb-2" height="200"
                                 src="https://as2.ftcdn.net/v2/jpg/02/10/19/09/1000_F_210190980_xz3EQUjljVIenoREAY03e76L4R20DLc1.jpg"
                                 width="200"/>
                            <p className="text-gray-700">
                                Useful resources for front-end developers
                            </p>
                        </div>

                        <div className="mb-4">
                            <img alt="Placeholder image for a blog sidebar item"
                                 className="w-full mb-2" height="200"
                                 src="https://static.ybox.vn/2017/12/5/b1e06b32-d985-11e7-9f4b-2e995a9a3302.png"
                                 width="200"/>
                            <p className="text-gray-700">
                                Tips learning Graphic Design
                            </p>
                        </div>

                        <div className="mb-4">
                            <img alt="Placeholder image for a blog sidebar item"
                                 className="w-full mb-2" height="200"
                                 src="https://www.webhopers.com/wp-content/uploads/2019/08/how-to-learn-digital-marketing.jpg"
                                 width="200"/>
                            <p className="text-gray-700">
                                Tips learning Marketing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Body;
