import React from 'react';
import HomeSlider from './HomeSlider';

const HomeBanner = () => {

    const bannerData = [
        {
            image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1661876345368/e3f2bd2f6c0af3279ccf36d084a12e42.jpg",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1665222858678/592d32f0161a416b513e91b88cef7f2d.jpg",
            prev: 1,
            id: 2,
            next: 3
        },


        {
            image: "https://mobile-price-bd.com/media/2022/08/Vivo-Y77e-Price-in-Bangladesh-2-390x220.jpg",
            prev: 2,
            id: 3,
            next: 1
        }

    ]



    return (
        <div className="carousel w-2/2 md:w-full lg:w-full  py-10">

            {

                bannerData.map(slide => <HomeSlider slide={slide} key={slide.id}> </HomeSlider>)
            }


            <div>

            </div>


        </div>
    );
};

export default HomeBanner;