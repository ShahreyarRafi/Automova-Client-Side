import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Audi = ({ products }) => {
    const audiProducts = products.filter(product => product.brand.toLowerCase() === "audi");

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
            <h2 className="text-2xl font-semibold font-primary">Cars Of audi</h2>
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

export default Audi;
