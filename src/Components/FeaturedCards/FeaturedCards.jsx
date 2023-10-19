import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCards = ({ products }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const featuredProducts = products?.filter(product => product?.featured?.toLowerCase() === "yes");
    console.log(featuredProducts);




    return (
        <div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
                {featuredProducts.length > 0 ? (
                    <div>
                        <h2 className='text-2xl font-semibold font-primary'>Featured Products: {featuredProducts.length}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                            {featuredProducts.slice(0, showAllCards ? featuredProducts.length : 6).map((product, index) => (
                                <div key={product._id} className="w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg">
                                    <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                                        <span className="font-semibold">Featured</span>
                                    </div>
                                    <figure className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            className='transform hover:scale-110 transition-transform duration-1000 object-cover h-52 w-full'
                                            style={{ transformOrigin: 'center center' }}
                                            src={product.photo}
                                            alt={product.name} // Use the product name as alt text
                                        />
                                    </figure>
                                    <div className="py-2 px-5">
                                        <h2 className="text-white text-lg mb-1">{product.name}</h2>
                                        <h5 className='text-white text-xl font-bold'>{product.price}</h5>
                                    </div>
                                    <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a] py-3 px-5">
                                        <div className='flex items-center justify-between gap-5 w-full'>
                                            <div className="bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                                <span className="">{product.type}</span>
                                            </div>
                                            <p>{product.rating} RATING</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-center border-t border-[#353a4a]">
                                        <Link to={`/product/${product._id}`}>
                                            <button
                                                className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3 w-full'>
                                                SHOW DETAILS
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {featuredProducts.length > 6 && (
                            <button
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setShowAllCards(!showAllCards)}
                            >
                                {showAllCards ? 'Show Less' : 'Show More'}
                            </button>
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