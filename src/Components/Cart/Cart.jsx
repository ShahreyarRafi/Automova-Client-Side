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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
                {cartItems.map(cartItem => (


                    <div key={cartItem._id} className="">
                        <div  className="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={cartItem.photo} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cartItem.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cartItem.description}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around text-center text-lg font-bold mt-3'>
                            <Link to="/" onClick={(e) => handleDelete(e, cartItem._id)}>
                                <a className='text-red-600'>Delete</a>
                            </Link>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default Cart;


{/* <div className='flex items-center justify-around text-center text-lg font-bold mt-3'>
    <Link to={`/details/${cartItem._id}`}>
        <a>Details</a>
    </Link>
    <Link to={`/update-cartItem/${cartItem._id}`}>
        <a>Update</a>
    </Link>
    <Link to="/" onClick={(e) => handleDelete(e, cartItem._id)}>
        <a className='text-red-600'>Delete</a>
    </Link>
</div> */}