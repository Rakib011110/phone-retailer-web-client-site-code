import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingPhoneModal from '../../BookingPhoneModal';
import HomeBanner from '../HomeBanner';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [bookProducts, setBookProducts] = useState(null)

    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div>
                <div className='grid grid-cols-1 mx-auto md:grid-cols-3 mt-10'>
                    {
                        products.map(product => <ProductsCard product={product} key={product._id}
                            setBookProducts={setBookProducts}

                        ></ProductsCard>)
                    }
                </div >
            </div>
            <div>
                {
                    bookProducts &&
                    <BookingPhoneModal
                        bookProducts={bookProducts}
                        setBookProducts={setBookProducts}
                    ></BookingPhoneModal>
                }
            </div>

        </div>
    );
};

export default Products;