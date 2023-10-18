import { useLoaderData } from "react-router-dom";
import Mercedes from "../../Components/Mercedes/Mercedes";


const MercedesPage = () => {

    const products = useLoaderData();

    return (
        <div>
            <Mercedes products={products}></Mercedes>
        </div>
    );
};

export default MercedesPage;