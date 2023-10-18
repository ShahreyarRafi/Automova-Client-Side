import { useLoaderData } from "react-router-dom";
import RollsRoyce from "../../Components/RollsRoyce/RollsRoyce";

const RollsRoycePage = () => {

    const products = useLoaderData();

    return (
        <div>
            <RollsRoyce products={products}></RollsRoyce>
        </div>
    );
};

export default RollsRoycePage;