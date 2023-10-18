import React from 'react';

const Ferrari = ({ products }) => {

    const ferrariProducts = products.filter(product => product.brand.toLowerCase() === "ferrari");

    return (
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of Ferrari</h2>
            {ferrariProducts.length > 0 ? (
                <div>
                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {ferrariProducts.length}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {ferrariProducts.map(product => (
                            <div key={product._id} className="border p-4 rounded-md">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p>{product.type}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                                <p>Rating: {product.rating}</p>
                                <img src={product.photo} alt={product.name} />
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

export default Ferrari;
