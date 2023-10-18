import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div className="fixed top-0 w-full z-50">
                <Navbar></Navbar>
            </div>
            <div className="mt-[87px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;