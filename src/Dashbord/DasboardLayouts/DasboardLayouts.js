import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navber from '../../Pages/Home/Share/Navber';

const DasboardLayouts = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile p-3 ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden"> Opne</label>
                </div>
                {/* <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content mt-20 ">
                        <li><Link to='/dashboard'>My Products</Link></li>
                        {
                            isAdmin && <div>
                                <li><Link to='/dashboard/allusers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/addProducts'> Add Products </Link></li>
                            </div>
                        }
                    </ul>

                </div> */}

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {/* {
                            isAdmin && <div>


                            </div>
                        } */}


                        {user?.isBuyer || user?.uid && <li><Link to="/dashboard">My Order</Link></li>}
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/addProducts">Add A Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                {/* <li><Link to='/dashboard/allusers'>All Buyer</Link></li> */}
                                <li><Link to="/dashboard/addProducts">Add A Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>



        </div>
    );
};

export default DasboardLayouts;