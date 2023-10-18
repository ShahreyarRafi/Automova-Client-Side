import React from 'react';

const Mercedes = ({ products }) => {
    // Filter the products by the brand "mercedes" (case-insensitive)
    const mercedesProducts = products.filter(product => product.brand.toLowerCase() === "mercedes");

    return (
        <div>
            <h2 className="text-2xl font-semibold font-primary">Cars Of Mercedes</h2>
            {mercedesProducts.length > 0 ? (
                <div>
                    <h2 className='text-2xl font-semibold font-primary'>Total Products: {mercedesProducts.length}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {mercedesProducts.map(product => (
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

export default Mercedes;
