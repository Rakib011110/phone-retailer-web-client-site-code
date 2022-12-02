import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import MyAddProductCard from './MyAddProductCard';

const MyProducts = () => {

    const { user } = useContext(AuthContext)

    const { data: product, } = useQuery({
        queryKey: ['add-product'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-site-pink.vercel.app/add-products/${user?.email}`)
            const data = await res.json()
            console.log(data);
            return data
        }
    })
    console.log(product);





    return (
        <div>

            <div className='grid grid-cols-1 xl:grid-cols-3'>
                {
                    product && <MyAddProductCard
                        product={product}
                    ></MyAddProductCard>
                }
            </div>
        </div>
    );
};

export default MyProducts;