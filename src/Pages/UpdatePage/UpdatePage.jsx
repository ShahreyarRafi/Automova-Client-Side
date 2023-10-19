import React from 'react';
import UpdateProduct from '../../Components/UpdateProduct/UpdateProduct';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = () => {

    const product = useLoaderData();

    return (
        <div>
            <UpdateProduct product={product}></UpdateProduct>
        </div>
    );
};

export default UpdatePage;