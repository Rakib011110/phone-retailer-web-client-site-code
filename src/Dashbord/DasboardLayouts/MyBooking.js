import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import HomeBanner from '../../Pages/Home/Share/HomeBanner';

const MyBooking = () => {
    const { user } = useContext(AuthContext)



    const url = `https://assignment-12-server-site-pink.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='mb-20 '>
                <HomeBanner mt-></HomeBanner>


            </div>
            <div >
                <h3 className="text-3xl mb-5">My Products</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full  ">
                        <thead className=' bg-sky-200'>
                            <tr >
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>location</th>
                                <th>Date</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings &&
                                bookings?.map((booked, i) => <tr>
                                    <td>{i + 1} </td>
                                    <td>{booked.name} </td>
                                    <td>{booked.email} </td>
                                    <td>{booked.phone} </td>
                                    <td>{booked.location} </td>
                                    <td>{booked.date}</td>
                                    <td >  <button className='btn btn-sm btn-primary'>Payment</button> </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyBooking;