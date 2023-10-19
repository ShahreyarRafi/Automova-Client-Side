import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ cartItems }) => {

    const { _id, name, brand, type, price, description, rating, photo } = cartItems || {};

    console.log(cartItems);

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
        <div>
            <div className="grid grid-cols-3 gap-4">
                {cartItems.map(cartItem => (
                    <div key={cartItem._id} className="border p-4 rounded-md">
                        <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                        <p>{cartItem.type}</p>
                        <p>{cartItem.price}</p>
                        <p>{cartItem.description}</p>
                        <p>Rating: {cartItem.rating}</p>
                        <img src={cartItem.photo} alt={cartItem.name} />
                        <div className='flex items-center justify-around text-center text-lg font-bold mt-3'>
                            <Link to={`/details/${cartItem._id}`}>
                                <a>Details</a>
                            </Link>
                            <Link to={`/update-cartItem/${cartItem._id}`}>
                                <a>Update</a>
                            </Link>
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