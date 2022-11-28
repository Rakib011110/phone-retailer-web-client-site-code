import React from 'react';

const ProductsCard = ({ product, setBookProducts }) => {
    console.log(product)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.image_url
                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.brands.name}
                        <div className="badge badge-secondary">{product.brands.price} </div>
                    </h2>
                    <p>{product.details.slice(0, 200)}</p>
                    {/* <div className="card-actions justify-end">
                        <label onClick={() => setBookProducts(product)} htmlFor="booking-modal" className="badge badge-outline btn btn-sm btn-primary">Book Now </label>



                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;