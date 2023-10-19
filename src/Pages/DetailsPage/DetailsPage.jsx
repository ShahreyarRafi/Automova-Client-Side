import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const DetailsPage = () => {

    const products = useLoaderData()
    const params = useParams();

    return (
        <div>
            <ProductDetails params={params} products={products}></ProductDetails>
        </div>
    );
};

export default DetailsPage;