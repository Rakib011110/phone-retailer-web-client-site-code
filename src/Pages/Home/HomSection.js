import React from 'react';

const HomSection = ({ info }) => {
    const { details, name, img } = info
    return (
        <div className='bg-blue-100 p-10 rounded-3xl shadow-lg'>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-md mx-10 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h2 className="card-title text-2xl  ">{name} </h2>
                        <p className=''> {details} </p>
                        <div className=" ">
                            <button className='btn btn-primary mt-10'> Go to buy </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomSection;