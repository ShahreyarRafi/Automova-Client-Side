import { useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";

const CartPage = () => {

    const cartItems = useLoaderData();

    return (
        <div>
            <Cart cartItems={cartItems}></Cart>
        </div>
    );
};

export default CartPage;