import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navber from '../../Pages/Home/Share/Navber';

const DasboardLayouts = () => {
    const { user } = useContext(AuthContext)

    const [isAdmin] = useAdmin(user?.email)


    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile p-3 ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>


                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content mt-20 ">
                        <li><Link to='/dashboard'>My Products</Link></li>
                        {


                            isAdmin && <div>
                                {/* <li><Link to='/dashboard/allusers'>All Users</Link></li> */}


                            </div>

                        }
                    </ul>

                </div>
            </div>



        </div>
    );
};

export default DasboardLayouts;