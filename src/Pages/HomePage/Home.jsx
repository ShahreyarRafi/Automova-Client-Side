import { useLoaderData } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import FeaturedCards from '../../Components/FeaturedCards/FeaturedCards';


const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <FeaturedCards products={products}></FeaturedCards>
            <Cards products={products}></Cards>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;
