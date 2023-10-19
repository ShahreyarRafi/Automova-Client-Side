import { useLoaderData } from "react-router-dom";
import Ferrari from "../../Components/Ferrari/Ferrari";


const FerrariPage = () => {

    const products = useLoaderData();
    

    return (
        <div>
            <Ferrari products={products}></Ferrari>
        </div>
    );
};

export default FerrariPage;