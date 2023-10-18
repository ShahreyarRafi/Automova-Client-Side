import { useLoaderData } from "react-router-dom";
import Bmw from "../../Components/Bmw/Bmw";


const BmwPage = () => {

    const products = useLoaderData();

    return (
        <div>
            <Bmw products={products}></Bmw>
        </div>
    );
};

export default BmwPage;