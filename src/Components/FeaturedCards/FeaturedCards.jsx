import React, { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FeaturedCards = ({ products }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const featuredProducts = products?.filter(product => product?.featured?.toLowerCase() === "yes");


    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // bg-[#0f1116] 
    return (
        <div className='dark:bg-[#090b11] duration-300 bg-white dark:text-white '>
            <div className='max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-4 py-12'>
                {featuredProducts.length > 0 ? (
                    <div>
                        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-center mb-12 dark:text-gray-100 text-black duration-100 font-primary'>Featured Cars</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProducts.slice(0, showAllCards ? featuredProducts.length : 3).map((product) => (
                                <div key={product._id} className=" font-primary relative    w-full bg-[#1f2229] rounded-lg shadow-lg">
                                    {product.featured === 'yes' && (
                                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                                            <span className="font-bold">Featured</span>
                                        </div>
                                    )}
                                    <div>
                                        <figure className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                className='transform hover:scale-110 transition-transform duration-1000 object-cover h-96 w-full'
                                                style={{ transformOrigin: 'center center' }}
                                                src={product.photo}
                                                alt={product.name}
                                            />
                                        </figure>
                                    </div>
                                    <div>
                                        <div className="py-2 px-5 my-1">
                                            <h2 className="text-white text-lg mb-3 mt-1 truncate">{product.name}</h2>
                                            <div className='flex justify-between items-center mb-1'>
                                                <h5 className='text-white text-xl font-bold truncate'> <span>$</span> {product.price}</h5>
                                                <h2 className="text-white text-lg truncate w-1/2 text-end pl-2"><span>Brand: </span>{capitalizeFirstLetter(product.brand)}</h2>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a] py-3 px-5">
                                            <div className='flex items-center justify-between gap-5 w-full'>
                                                <div className="bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                                    <span className="font-medium truncate">{product.type}</span>
                                                </div>
                                                <div className='flex items-center truncate'>
                                                    <div className='flex gap-[1px] -mt-[2px] mr-1'>
                                                        {Array.from({ length: Math.min(Math.floor(product.rating), 5) }, (_, index) => (
                                                            <span key={index} className="text-yellow-400"><BsStarFill /></span>
                                                        ))}
                                                        {product.rating % 1 !== 0 && (
                                                            <span className="text-yellow-400"><BsStarHalf /> </span>
                                                        )}
                                                        {Array.from({ length: Math.max(5 - Math.ceil(product.rating), 0) }, (_, index) => (
                                                            <span key={index} className="text-gray-400"><BsStar /></span>
                                                        ))}
                                                    </div>
                                                    <p> {Math.min(product.rating, 5)} {Math.min(product.rating, 5) > 1 ? ("Stars") : ("star")}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-center border-t border-[#353a4a]">
                                            <Link to={`/details/${product._id}`}>
                                                <button
                                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3 w-full'>
                                                    SHOW DETAILS
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {featuredProducts.length > 3 && (
                            <div className='flex justify-center py-10'>
                                <button
                                    className="text-white text-md font-medium cursor-pointer bg-[#FF9D00] py-4 px-8 rounded-md"
                                    onClick={() => setShowAllCards(!showAllCards)}
                                >
                                    {showAllCards ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='h-44 flex items-center justify-center'>
                        <p className='text-2xl font-bold font-primary'>No featured products</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default FeaturedCards;