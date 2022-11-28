import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm('');

    //const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: productCategories, isLoading } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            const res = await fetch('');
            const data = await res.json();
            return data;
        }
    });



    const handleAddProduct = data => {

        const product = {
            name: data.name,
            price: data.price,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            category: data.category,
            description: data.description,
            use: data.use,

        }
        console.log(product)

    }


    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input type="text"
                        {...register("price")}
                        className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Phone</span></label>
                    <input type="text"
                        {...register("phone")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Please select a Category</option>
                        {
                            productCategories?.map(category => <option
                                key={category._id}
                                value={category.CategoryName}
                            >{category.CategoryName}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Description</span></label>
                    <input type="text"
                        {...register("description")}
                        className="input input-bordered w-full max-w-xs" />

                </div>



                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Upload Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>

                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />


            </form>
        </div>
    );
};

export default AddProducts;