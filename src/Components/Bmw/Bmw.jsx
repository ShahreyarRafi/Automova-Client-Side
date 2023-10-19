import React from 'react';
import { Link } from 'react-router-dom';

const Bmw = ({ products }) => {
    // Filter the products by the brand "bmw" (case-insensitive)
    const bmwProducts = products.filter(product => product.brand.toLowerCase() === "bmw");

    return (
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of BMW</h2>
            {bmwProducts.length > 0 ? (
                <div>
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
                                <div className='text-center text-lg font-bold mt-3'>
                                    <Link to={`/details/${product._id}`}>
                                        <a>Details</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default Bmw;
