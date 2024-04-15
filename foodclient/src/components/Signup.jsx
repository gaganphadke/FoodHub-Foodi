import React from 'react'
import { FaFacebook, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Modal from './Modal'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
    return (
        <div className='max-w-md shadow bg-white w-full mx-auto flex items-center justify-center my-20'>
            <div className="modal-action mt-0 flex flex-col justify-center">
            <form className="card-body" method='dialog' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-bold text-lg'>Create an account</h3>

                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" {...register("email")} required />
                </div>
                {/* password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered" required {...register("password")} />
                    <label className="label mt-1">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                {/* error text */}

                {/* login btn */}
                <div className="form-control mt-6">
                    <input type='submit' value='Sign Up' className="btn bg-green text-white" />
                </div>
                <p className='text-center my-2'>Already have an account? <button className='underline text-red ml-1' onClick={() => document.getElementById('my_modal_5').showModal()}>Login</button></p>
                <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
            </form>
            {/* socials  */}
            <div className='text-center space-x-3 mb-5'>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaGoogle />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaTwitter />
                </button>
                <button className="btn btn-circle hover:bg-green hover:text-white">
                    <FaFacebook />
                </button>
            </div>
        </div>
        <Modal/>
        </div>
    )
}

export default Signup