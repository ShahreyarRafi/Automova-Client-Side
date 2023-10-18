import React from 'react';

const RollsRoyce = ({ products }) => {
    // Filter the products by the brand "rollsRoyce" (case-insensitive)
    const rollsRoyceProducts = products.filter(product => product.brand.toLowerCase() === "rolls-royce");

    return (
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of Rolls Royce</h2>
            {rollsRoyceProducts.length > 0 ? (
                <div>
                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {rollsRoyceProducts.length}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {rollsRoyceProducts.map(product => (
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

export default RollsRoyce;
