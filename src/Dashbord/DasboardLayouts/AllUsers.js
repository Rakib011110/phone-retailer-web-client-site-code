import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import HomeBanner from '../../Pages/Home/Share/HomeBanner';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({


        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-site-pink.vercel.app/users');
            const data = await res.json();
            return data;
        }



    })

    /* ------------hanlde Add to Admin------ */
    const hanldeAdmin = id => {
        fetch(`https://assignment-12-server-site-pink.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
                console.log(data)
            })
    }


    return (
        <div>
            <div className='lg-block sm:none'>
                <HomeBanner />

            </div>
            <div>
                <h2 className="text-3xl"> All Seller</h2>
            </div>


            <div>


                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Add Seller </th>
                                <th>Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr  >
                                    <th>{i + 1} </th>
                                    <td>{user.name}</td>
                                    <td> {user.email} </td>
                                    <td> {user?.role !== 'admin' && <button onClick={() => hanldeAdmin(user._id)} className=' btn-sm btn btn-outline btn-primary'>Add To Admin</button>}</td>
                                    <td><button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                </tr>)

                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;