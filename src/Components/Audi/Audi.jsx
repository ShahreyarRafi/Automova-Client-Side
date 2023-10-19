import React from 'react';
import { Link } from 'react-router-dom';

const Audi = ({ products }) => {
    // Filter the products by the brand "audi" (case-insensitive)
    const audiProducts = products.filter(product => product.brand.toLowerCase() === "audi");

    return (
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of Audi</h2>
            {audiProducts.length > 0 ? (
                <div>
                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {audiProducts.length}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {audiProducts.map(product => (
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

export default Audi;
