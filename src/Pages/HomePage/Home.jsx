import { useLoaderData } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';


const Home = () => {

    const products = useLoaderData();

    return (
        <div>
           <Banner></Banner>
           {/* <h2 className='text-2xl font-semibold font-primary'> Total Products: {products.length}</h2> */}
           <Cards products={products}></Cards>
           <WhyUs></WhyUs>
        </div>
    );
};

export default Home;