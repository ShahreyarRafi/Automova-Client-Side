
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Porsche.css'


import React, { useState, useEffect, useMemo } from 'react';
import image1 from '../../assets/images/mrcdsbf.jpg';
import image2 from '../../assets/images/bmwfw.png';
import image3 from '../../assets/images/lmbrgnbb.png';
import image4 from '../../assets/images/mclrnfo.png';
import image5 from '../../assets/images/tmk5ybt.png';
import image6 from '../../assets/images/ar8gf.jpg';
import image7 from '../../assets/images/ar8bf.png';

const Porsche = ({ products }) => {
    const porscheProducts = products.filter(product => product.brand.toLowerCase() === "porsche");


    const images = useMemo(() => [image1, image2, image3, image4, image5, image6, image7], []);
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
            <h2 className="text-2xl font-semibold font-primary">Cars Of porsche</h2>
            {porscheProducts.length > 0 ? (
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
                                            <h2 className='xl:text-7xl md:text-5xl text-3xl font-rubik font-bold text-white text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-8'><span className='text-[#FF9D00]'>Ferrari</span></h2>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {porscheProducts.length}</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {porscheProducts.map(product => (
                            <div key={product._id} className=" font-primary relative w-full bg-[#1f2229] rounded-lg shadow-lg">
                                <div className="price-tag-shape absolute top-0 left-0 bg-[#FF9D00] text-white py-2 px-4 z-10 flex items-center shadow-xl rounded-tl-lg">
                                    <span className="font-bold">Featured</span>
                                </div>
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
                                            <p>{product.rating} RATING</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-evenly border-t border-[#353a4a]">
                                        <Link to={`/details/${product._id}`}>
                                            <button
                                                className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3 w-full'>
                                                DETAILS
                                            </button>
                                        </Link>
                                        <Link to={`/update-product/${product._id}`}>
                                            <button
                                                className='font-primary text-sm font-medium hover:text-[#FF9D00] duration-300 text-white text-star px-7 py-3 w-full'>
                                                UPDATE
                                            </button>
                                        </Link>
                                        <Link to="/" onClick={(e) => handleDelete(e, product._id)}>
                                            <button
                                                className='font-primary text-sm font-medium hover:text-rose-600 duration-300 text-white text-star px-7 py-3 w-full'>
                                                DELETE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='h-[72vh] flex items-center justify-center'>
                    <p className='text-2xl font-bold font-primary'>No products found</p>
                </div>
            )}
        </div>
    );
};

export default Porsche;
