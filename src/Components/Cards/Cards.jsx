import React from 'react';
import { Link } from 'react-router-dom';
import cardTestImg from '../../assets/images/cardTest.png'

const Cards = ({products}) => {
    return (
        <div className='bg-[#eef2fa]'>
            <div className='py-40'>
                <div className='container grid grid-cols-4 gap-5 mx-auto px-4'>
                    <div className="w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Total Products: {products.length}</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a] py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="   w-[330px] md:w-[360px] bg-[#222633] shadow-xl font-primary relative rounded-lg ">
                        <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg ">
                            <span className="font-semibold">Featured</span>
                            
                        </div>
                        <figure className="relative overflow-hidden rounded-t-lg">
                            <img
                                className='transform hover:scale-110 transition-transform duration-1000 object-cover  h-52 w-full'
                                style={{ transformOrigin: 'center center' }}
                                src={cardTestImg}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="py-2 px-5">
                            <h2 className=" text-white text-lg mb-1">Audi A4 4-door sedan blue</h2>
                            <h5 className='text-white text-xl font-bold'>$23,000</h5>
                        </div>
                        <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a]  py-3 px-5">
                            <div className='flex items-center justify-start gap-5 w-full'>
                                <div className=" bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                    <span className="">2020</span>
                                </div>
                                <p>245,000 MILES</p>
                                <p>Manual</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center border-t border-[#353a4a] ">
                            <Link className='w-full'>
                                <button

                                    className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star  px-7 py-3 w-full'>
                                    SHOW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;