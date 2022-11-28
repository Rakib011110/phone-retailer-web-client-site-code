import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken'

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUPError] = useState('');
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)




    const [token] = useToken(createdUserEmail)
    if (token) {
        navigate('/')
    }

    // *---- get Token 


    const handleLogin = data => {
        setSignUPError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast('User Created Successfully.')


                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        // console.log(user)
                        saveUser(data.name, data.email, data.role)
                    })
                    .then(err => console.log(err))
            })
            .catch(error => console.error(error))
    }

    // *---------saveUser--------------------------

    const saveUser = (name, email, role) => {

        const user = { name, email, role };
        fetch('https://assignment-12-server-site-pink.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }
    //* -------accessToken ----------------

    // const getUserToken = email => {
    //     fetch(`https://assignment-12-server-site-pink.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {

    //                 localStorage.setItem('', data.accessToken)
    //                 navigate('/')

    //             }

    //         })


    // }






    return (
        <div className="hero w-full mt-10">

            <div className="hero-content flex-col lg:flex-row gap-5 ">
                <div className="text-center  w-full lg:text-left">

                    <img className=' shadow-xl  w-10/12 rounded-3xl' src="https://developer.mytsi.org/image/images/login.jpg" alt="" />
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-5">
                    <h1 className="text-2xl font-bold text-center">Register now!</h1>

                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered input-info w-full" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email Address is required"
                            })} type="email" className="input input-bordered input-info w-full " placeholder="Email" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" className="input input-bordered input-info w-full  " placeholder="Password" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Role</span></label>
                            <select
                                {...register('role', { required: 'select your position' })}

                                className="select input-bordered w-full max-w-xs">
                                <option disabled selected>{ }</option>
                                <option >user</option>
                                <option>seller</option>


                            </select>
                            {errors.role && <p className='text-red-600'> {errors.role.message}</p>}
                            <div>
                                {
                                    signUpError && <p className='text-red-600'>{signUpError}</p>
                                }
                            </div>

                        </div>



                        {/* <p>{data}</p> */}
                        <div className='mt-5'>
                            <input className='btn btn-primary w-full ' type='submit' value={'Login'} />
                        </div>

                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>

                    <p className='mb-5'> Already have an account please  <Link className=' text-info font-bold ' to="/login"> Login</Link>   </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>

                </div>

            </div>
        </div>
    );
};

export default SignUp;