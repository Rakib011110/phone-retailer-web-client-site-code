import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Products from './Share/Products/Products';
import toast from 'react-hot-toast';

const BookingPhoneModal = ({ bookProducts, setBookProducts }) => {

    const { user } = useContext(AuthContext)


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const productsName = form.productsName.value
        const price = form.price.value
        const location = form.location.value
        const date = form.date.value
        // console.log(name, email, phone);


        const booking = {

            name,
            email,
            phone,
            productsName,
            price,
            location,
            date
        }

        fetch('https://assignment-12-server-site-pink.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookProducts(null)
                    toast.success('Booking Confrime')
                }
            })



    }




    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="">
                        <div className="w-16 rounded">
                            <img src={bookProducts.brands.img} alt='' />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold center mb-5">{bookProducts.brands.name}</h3>

                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-3'>





                        <input name='productsName' disabled value={bookProducts.brands.name} type="text" placeholder="Your Name" className="input input-bordered input-primary w-full " />

                        <input name='date' disabled value={bookProducts.brands.published_date} type="text" placeholder="Your Name" className="input input-bordered input-primary w-full " />

                        <input name='price' disabled value={` Price $${bookProducts.brands.price}`} className="input input-bordered input-primary w-full " />





                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered input-primary w-full " />

                        <input name='email' readOnly defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered input-primary w-full " />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-primary w-full " />
                        <input name='location' type="text" placeholder="Add Your Location" className="input input-bordered input-primary w-full " />

                        <br />
                        <input className='w-full btn btn-primary ' type="Submit" value="Booking" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingPhoneModal;