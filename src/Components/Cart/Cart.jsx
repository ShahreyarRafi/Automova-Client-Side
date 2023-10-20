import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cartItems }) => {
    const handleDelete = (e, cartItemsId) => {
        e.preventDefault();
        console.log(cartItemsId);
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
                fetch(`http://localhost:5000/cartItems/${cartItemsId}`, {
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


        <div className='min-h-[80vh] flex items-center justify-center px-4 py-10'>
            {cartItems.length > 0 ? (
                <div>
                    <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
                        {cartItems.map(cartItem => (
                            <div key={cartItem._id} className="mx-auto max-w-md md:max-w-3xl">
                                <div className="h-full w-full flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={cartItem.photo} alt="" />
                                    <div className="w-full">
                                        <div className="flex flex-col justify between p-4 leading-normal">
                                            <h5 className="md:min-w-[300px]  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cartItem.name}</h5>
                                            <Link to="/" onClick={(e) => handleDelete(e, cartItem._id)}>
                                                <a className='text-red-600'>Delete</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='h-[80vh] flex items-center justify-center'>
                    <p className='text-2xl font-bold font-primary'>Empty Cart</p>
                </div>
            )}
        </div>



        // <div className="min-h-[80vh] flex items-center justify-center w-full">
        //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex justify-center">
        //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto ">
        //             {cartItems.length === 0 ? (
        //                 <div className="w-full flex items-center justify-center">
        //                     <h2 className="font-primary text-2xl font-bold text-center">Empty Cart</h2>
        //                 </div>
        //             ) : (
        //                 cartItems.map(cartItem => (
        //                     <div key={cartItem._id} className="mx-auto max-w-md md:max-w-3xl">
        //                         <div className="h-full w-full flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700">
        //                             <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={cartItem.photo} alt="" />
        //                             <div className="w-full">
        //                                 <div className="flex flex-col justify-between p-4 leading-normal">
        //                                     <h5 className="md:min-w-[300px]  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cartItem.name}</h5>
        //                                     <Link to="/" onClick={(e) => handleDelete(e, cartItem._id)}>
        //                                         <a className='text-red-600'>Delete</a>
        //                                     </Link>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Cart;
