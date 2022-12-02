import React, { useState } from 'react';
import Category from './Category';
import HomeSections from './HomeSections';
import Homextra from './Homextra';
import HomeBanner from './Share/HomeBanner';
import Silider from './Silider';
import SliderItem from './SliderItem';

const Home = () => {



    return (
        <div>
            <div className=''>
                {/* <HomeBanner></HomeBanner> */}
                {/* <Silider></Silider> */}
                <Silider></Silider>


            </div>








            <div className=''>

                <h1 className='text-red-600 text-3xl mt-10 text-center'> Choose Mobile Category  </h1>
                <Category></Category>
            </div>

            <div>
                <Homextra />

            </div>


            <div>
                <HomeSections></HomeSections>

            </div>
        </div>
    );
};

export default Home;



