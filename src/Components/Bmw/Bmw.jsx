
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Bmw.css'

import React, { useState, useEffect, useMemo } from 'react';
import image1 from '../../assets/images/mrcdsbf.jpg';
import image2 from '../../assets/images/bmwfw.png';
import image3 from '../../assets/images/lmbrgnbb.png';
import image4 from '../../assets/images/mclrnfo.png';
import image5 from '../../assets/images/tmk5ybt.png';
import image6 from '../../assets/images/ar8gf.jpg';
import image7 from '../../assets/images/ar8bf.png';

const Bmw = ({ products }) => {
    const bmwProducts = products.filter(product => product.brand.toLowerCase() === "bmw");



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
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of bmw</h2>
            {bmwProducts.length > 0 ? (
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



                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {bmwProducts.length}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {bmwProducts.map(product => (
                            <div key={product._id} className="border p-4 rounded-md">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p>{product.type}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                                <p>Rating: {product.rating}</p>
                                <img src={product.photo} alt={product.name} />
                                <div className='flex items-center justify-around text-center text-lg font-bold mt-3'>
                                    <Link to={`/details/${product._id}`}>
                                        <a>Details</a>
                                    </Link>
                                    <Link to={`/update-product/${product._id}`}>
                                        <a>Update</a>
                                    </Link>
                                    <Link to="/" onClick={(e) => handleDelete(e, product._id)}>
                                        <a className='text-red-600'>Delete</a>
                                    </Link>
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

export default Bmw;
