
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Mercedes.css'

import React, { useState, useEffect, useMemo } from 'react';
import image1 from '../../assets/images/mads/m1.png';
import image2 from '../../assets/images/mads/m2.png';
import image3 from '../../assets/images/mads/m3.jpg';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';



const Mercedes = ({ products }) => {
    const mercedesProducts = products.filter(product => product.brand.toLowerCase() === "mercedes");



    const images = useMemo(() => [image1, image2, image3], []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFadingIn(true);
                setTimeout(() => {
                    setIsFadingOut(false);
                    setIsFadingIn(false);
                }, 500); // Adjust the duration based on your fade-in animation
            }, 800); // This timeout should match the duration of your fade-out animation
        }, 5000); //Adjust Zoom in duration also need to update in css + 2/3 sec

        return () => clearInterval(intervalId);
    });




    const handleDelete = (e, productId) => {
        e.preventDefault();
        console.log(productId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${productId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    };


    return (
        <div className='bg-[#090b11]'>
            {mercedesProducts.length > 0 ? (
                <div>



                    <div className=" overflow-hidden xl:h-[70vh] flex justify-center items-center">
                        <div className="carousel w-full object-cover ">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item relative w-full flex justify-center items-center flex-1 overflow-hidden ${index === currentImageIndex ? 'visible' : 'hidden'
                                        }`}
                                >
                                    <div
                                        className={`image-wrapper ${isFadingOut && index === currentImageIndex ? 'fade-out' : ''} ${isFadingIn && index === currentImageIndex ? 'fade-in' : ''}`}
                                    >
                                        <img
                                            src={image}
                                            className={`w-full object-cover md:h-full md:w-full h-96 opacity-60 ${index === currentImageIndex ? 'zoom-in' : ''}`}
                                            alt={`Image ${index}`}
                                        />
                                    </div>

                                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <div className='flex flex-col items-center justify-center h-[88vh]'>
                                            <h2 className='xl:text-7xl md:text-5xl text-3xl font-rubik font-bold text-white text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-8'><span className='text-[#FF9D00]'></span></h2>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                    <div className="max-w-[1850px] grid grid-cols-4 gap-4 py-10 mx-auto">
                        {mercedesProducts.map(product => (
                            <div key={product._id} className=" font-primary relative w-full bg-[#1f2229] rounded-lg shadow-lg">
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
                                    <div className="py-2 px-5">
                                        <h2 className="text-white text-lg mb-1">{product.name}</h2>
                                        <h5 className='text-white text-xl font-bold'> <span>$</span> {product.price}</h5>
                                    </div>
                                    <div className="card-actions justify-center border-t text-slate-400 border-[#353a4a] py-3 px-5">
                                        <div className='flex items-center justify-between gap-5 w-full'>
                                            <div className="bg-[#FF9D00] text-white py-1 px-3 rounded-md">
                                                <span className="font-medium">{product.type}</span>
                                            </div>
                                            <div className='flex items-center'>
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
                                    <div className="flex justify-evenly border-t border-[#353a4a]  ">
                                        <div className='w-1/2 border-r border-[#353a4a] text-center'>
                                            <Link to={`/details/${product._id}`}>
                                                <button
                                                    className=' font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3'>
                                                    DETAILS
                                                </button>
                                            </Link>
                                        </div>
                                        <div className='w-1/2 text-center'>
                                            <Link to={`/update-product/${product._id}`}>
                                                <button
                                                    className=' font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3'>
                                                    UPDATE
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='h-[80vh] flex items-center justify-center text-white'>
                    <p className='text-2xl font-bold font-primary'>No products found</p>
                </div>
            )}
        </div>
    );
};

export default Mercedes;
