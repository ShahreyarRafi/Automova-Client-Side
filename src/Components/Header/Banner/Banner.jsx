// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo } from 'react';
import image1 from '../../../assets/images/h1-slider-1a-background-img.jpg';
import image2 from '../../../assets/images/h1-slider-2a-background-img.jpg';
import image3 from '../../../assets/images/h1-slider-3a-background-img.jpg';
import image4 from '../../../assets/images/h1-slider-4a-background-img.jpg';
import '../Banner/Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const images = useMemo(() => [image1, image2, image3, image4], []);
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
                }, 800); // Adjust the duration based on your fade-in animation
            }, 1000); // This timeout should match the duration of your fade-out animation
        }, 7000); //Adjust Zoom in duration also need to update in css + 2/3 sec

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className=" overflow-hidden xl:h-[93vh] flex justify-center items-center">
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
                                <h2 className='xl:text-7xl md:text-5xl text-3xl font-rubik font-semibold text-white md:w-2/3 text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-8'> Discover Tech Conferences, Gaming Expos, Hackathons, and More!</h2>
                                <div>
                                    <Link to={`/register`}>
                                        <button className='bg-[#fe0e1e] font-rubik font-medium text-white md:px-14 px-8 md:py-4 py-2 btn-shape'>
                                            Join Us Now!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
