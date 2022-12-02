import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm('');

    const navigate = useNavigate();

    const { data: productCategories, isLoading } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-site-pink.vercel.app/phone-category');
            const data = await res.json();
            return data;
        }
    });
    console.log(productCategories);

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        name: data.name,
                        email: data.email,
                        price: data.price,
                        category_id: data.category,
                        image: imgData.data.url,
                        details: data.details,
                        condition: data.condition,
                        location: data.location,
                        image_url: data.image,
                    }
                    console.log(product);


                    fetch('https://assignment-12-server-site-pink.vercel.app/phone', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard')
                        })
                }
            })

    }


    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Product</h2>
            <div className='w-96 p-7'>
                <div className='bg-orange-400 w-45  rounded-xl'>
                    <h2 className="text-2xl text-center font-bold">ADD A PRODUCT </h2>
                </div>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Model</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs input-warning " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("price", {
                            required: "price is Required"
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" defaultValue={user?.email} {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select
                            {...register('category')}
                            className="select input-bordered w-full max-w-xs input-warning">
                            {
                                productCategories?.map(category => <option
                                    key={category._id}
                                    value={category._id}
                                >{category.name} </option>)
                            }


                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <input type="text" {...register("details", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition </span></label>
                        <input type="text" {...register("condition", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs input-warning" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>
                    <input className='btn btn-warning bg-orange-500 w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;




/* 


        const product = {

            productsName: data.name,
            email: data.email,
            price: data.price,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            category_id: data.category,
            role: data.role,
            use: data.use,
        }





        

*/