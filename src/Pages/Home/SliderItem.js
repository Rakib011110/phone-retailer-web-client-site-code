import React from 'react';

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute justify-end transform -translate-y-1/2 left-24 top-1/2">
                <h1 className='text-6xl font-bold bg-indigo-200 p-5 rounded-2xl bg-opacity-60'>
                    WellCome To Phone Retailer<br />
                    <p className=' text-3xl text-white'>
                        Choose Your Phone
                    </p>
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 text-white">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle text-white">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;