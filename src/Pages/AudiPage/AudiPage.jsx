import { useLoaderData } from "react-router-dom";
import Audi from "../../Components/Audi/Audi";


const AudiPage = () => {

    const products = useLoaderData();

    return (
        <div>
            <Audi products={products}></Audi>
        </div>
    );
};

export default AudiPage;