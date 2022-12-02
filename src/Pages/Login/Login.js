import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const { signIn, googleSignIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const [token] = useToken(loginUserEmail)



    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })

    }
    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });

    }

    const handleGoogleSignIn = () => {
        googleSignIn()

            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
            })
            .then(err => console.error(err))
    }






    return (
        <div>
            <div className="hero w-full  mt-20">

                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="text-center  w-full lg:text-left">

                        <img className=' shadow-xl  w-10/12 rounded-3xl' src="https://developer.mytsi.org/image/images/login.jpg" alt="" />
                    </div>
                    <div className="card  p-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-2xl text-center font-bold">Login now!</h1>

                        <form onSubmit={handleSubmit(handleLogin)}>

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




                            <p>{data}</p>
                            <div className='mt-5'>
                                <input className='btn btn-primary w-full ' type='submit' value={'Login'} />
                            </div>
                            <div>
                                {loginError && <p className='text-red-600'>{loginError} </p>}
                            </div>
                        </form>


                        <p className='mb-5'> Dont't Have Any Acccount Please  <Link className=' text-info font-bold ' to="/signup">  Register</Link>   </p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;