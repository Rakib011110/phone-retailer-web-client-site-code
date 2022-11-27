import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div>
                <div>
                    <img src="https://vectorforfree.com/wp-content/uploads/2020/03/Error_404_VectroForFree.png" alt="" />
                </div>
                <p className='text-3xl text-red-500'> {error.stutusText || error.message}</p>
            </div>
        </div>
    );
};

export default Error;