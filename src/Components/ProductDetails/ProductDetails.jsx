import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ProductDetails = ({ products, params }) => {
    const [product, setProduct] = useState();
    const [cart, setCart] = useState([]); 

    const handleAddToCart = () => {
        const productWithoutId = { ...product };
        delete productWithoutId._id;

        const itemAlreadyInCart = cart.some(item => item._id === product._id);

        if (itemAlreadyInCart) {
            Swal.fire({
                title: 'Already added!',
                text: 'This item is already in your cart',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        } else {

            fetch('http://localhost:5000/cartItems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productWithoutId) 
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully Added To Cart',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                });

            setCart([...cart, product]);
        }
    };

    const { id } = params;

    useEffect(() => {
        const findProduct = products?.find(product => product._id === id);
        setProduct(findProduct);
    }, [id, products]);

    return (
        <div>
            {product ? (
                <div className="font-primary bg-[#090b11] ">
                    <div className="relative">
                        <img className="object-cover overflow-hidden h-[49vh] w-full " src={product.photo} alt={product.name} />
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div className="flex flex-col items-center justify-center h-[88vh]">
                                <h2 className="lg:text-5xl text-4xl font-rubik font-semibold text-white text-center leading-[1.2] drop-shadow-lg shadow-black mb-8">{product.name}</h2>
                                <div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-[#fe0e1e] font-rubik font-medium text-white md:px-14 px-8 md:py-4 py-3 btn-shape"
                                    >
                                        Add to cart 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-white xl:text-xl lg:text-lg text-base xl:px-36 md:px-20 px-10 py-10 leading-10">
                            {product.description}
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetails;



// const handleAddToCart = () => {
//     console.log(product);
//     fetch('http://localhost:5000/cartItems', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(product)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.insertedId) {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Successfully Added To Cart',
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         })

// }