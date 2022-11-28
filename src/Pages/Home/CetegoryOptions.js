import React from 'react';
import { Link } from 'react-router-dom';

const CetegoryOptions = ({ category }) => {



    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src="https://www.apple.com/v/iphone-12/k/images/meta/iphone-12_specs__uks7xn3l3yqa_og.png?202209291829" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category.name} </h2>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${category._id}`}> <button className="btn btn-primary btn-sm">Buy now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CetegoryOptions;