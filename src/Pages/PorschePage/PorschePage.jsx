import { useLoaderData } from "react-router-dom";
import Porsche from "../../Components/Porsche/Porsche";


const PorschePage = () => {

    const products = useLoaderData();

    return (
        <div>
            <Porsche products={products}></Porsche>
        </div>
    );
};

export default PorschePage;