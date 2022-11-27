import React from 'react';
import HomSection from './HomSection';

const HomeSections = () => {

    const informations = [
        {
            id: 1,
            img: "https://images.macrumors.com/t/3W4Fotpi_HGdzLZpXOHjPPhZyHU=/2500x/article-new/2021/09/iPhone-13-and-13-Pro-Carrier-Pre-Order-Feature-2.jpg",
            name: "Lorem ipsum dolor sit amet",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quidem?"

        }


    ]



    return (
        <div>
            <div className=' mt-20'>
                {
                    informations.map(info => <HomSection info={info} key={info.id}></HomSection>)

                }
            </div>
            <h1></h1>
        </div>
    );
};

export default HomeSections;