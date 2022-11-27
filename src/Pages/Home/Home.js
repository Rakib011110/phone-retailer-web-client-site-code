import React, { useState } from 'react';
import Category from './Category';
import HomeSections from './HomeSections';
import HomeBanner from './Share/HomeBanner';

const Home = () => {



    return (
        <div>
            <div className=''>
                <HomeBanner></HomeBanner>

            </div>

            <div className=''>

                <h1 className='text-red-600 text-3xl mt-10 text-center'> Choose Mobile Category  </h1>
                <Category></Category>
            </div>


            <div>
                <HomeSections></HomeSections>

            </div>
        </div>
    );
};

export default Home;



