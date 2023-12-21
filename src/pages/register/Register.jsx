import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../providers/AuthProvider';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const[photoURL,setPhotoURL] = useState('')
    // console.group(photoURL)
   
    const schema = yup.object().shape({
        password: yup.string().required('Password is required'),
        
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(schema),
    });

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        
        
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
        
     
        
        if (res.data.success) {
            const photoURL = res.data.data.display_url;
           
     
       
        
        createUser(data.email,data.password)
        .then(result=>{
            console.log(result.user);
            updateUserProfile(data.name, photoURL)
                    .then(() => {
                        console.log( photoURL)
                    })
        })
    }
    

        if (res.data.success) {
            
            const user = {
                name: data.name,
                email: data.email,
                image: res.data.data.display_url,
           
            };
            console.log(user)
            try {
                const userRes = await axiosPublic.post('/users', user);
              
                if (userRes.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/');
                }
              } catch (error) {
                // Check if the error response contains information about an existing user
                if (error.response && error.response.status === 400 && error.response.data.error === 'User with this email already exists') {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Registration Failed',
                    text: 'User with this email already exists',
                    showConfirmButton: true,
                  });
                } else {
                  // Handle other errors
                  console.error('Error during registration:', error);
                }
              }
              
        }
    };

    return (
        <div className="pt-24 pb-4 bg-teal-600">
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-[38%] mx-auto mt-0 p-4 mb-10 rounded-lg bg-white">
                <div className="text-2xl font-bold text-center">Register</div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Name*</span>
                    </label>
                    <input type="text" placeholder="Name" {...register('name', { required: true })} required className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Email*</span>
                    </label>
                    <input type="text" placeholder="Email" {...register('email', { required: true })} required className="input input-bordered w-full" />
                </div>
              
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Password*</span>
                    </label>
                    <input type="password" placeholder="Password" {...register('password')} className={`input input-bordered w-full ${formState.errors.password ? 'input-error' : ''}`} />
                    {formState.errors.password && <p className="text-error">{formState.errors.password.message}</p>}
                </div>
              
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Add Your Image*</span>
                    </label>
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button className="btn w-full bg-teal-600 font-bold text-xl text-orange-300 hover:text-black hover:bg-teal-600">Register</button>
                <p className="px-6 my-4 text-sm ">
                   
                        Already Registered? <Link to="/login" className='text-blue-700 font-semibold'> Login Here</Link>{' '}
                   
                </p>
                
            </form>
        </div>
    );
};

export default Register;
