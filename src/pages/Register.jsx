import { useEffect, useState } from "react";
import usePostQuery from "../customHook/usePostQuery";
import {useForm} from 'react-hook-form'
import {SuccessAlert, Input, ErrorAlert} from '../components/index'


export default function Register(){
    const {register, handleSubmit, reset, formState: { errors }} =  useForm();
    const [data, setData] = useState(null)
    const [success, setSuccess] = useState(false);
    const [loading, error, response] = usePostQuery("https://fakestoreapi.com/users", data);

    const onSubmit = (data) => {
        setData(JSON.stringify(data));
        reset()
    };
    

   useEffect(() => {
    if(response){
        setSuccess(true)
        setTimeout(() =>{
            setSuccess(false)
        },1500)
    }
   }, [response])


   console.log('render')

  

    return(
        <div className="container mx-auto lg:max-w-5xl relative">
            <h1 className="text-center text-2xl my-8 font-bold">User Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5 p-5 bg-zinc-800">
                    <div className="w-1/2">
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">First name</label>
                            <input type="text" {...register("firstname", {required: 'This field is required', minLength:{value:3, message:'Please write a valid first name'}, pattern: { value:/^[A-Za-z]+$/, message:'Please write only alphabet.'}, })} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.firstname?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Last name</label>
                            <input type="text" {...register("lastname", {required: 'This field is required', minLength:{value:3, message:'Please write a valid last name'}, pattern: { value:/^[A-Za-z]+$/, message:'Please write only alphabet.'}, })} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.lastname?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Username</label>
                            <input type="text" {...register("username", {required: 'This field is required', minLength:{value:6, message:'minimum 6 letters required'}, pattern: { value:/^[a-zA-Z0-9]+$/, message:'No special characters are allowed.'}, })} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.username?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Email</label>
                            <input type="email" {...register("email", {required: 'This field is required', pattern: {value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:'Write a valid email address'}, })} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.email?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Password</label>
                            <input type="password" {...register("password", {required: 'This field is required', minLength:{value:8, message:'Min 8 letters'}})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.password?.message}</p>
                        </div>
                        {loading ? <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                        </div> : ''}
                        {success ? <SuccessAlert text={'Registered'}/> : ''}
                        {error ? <ErrorAlert /> : ''}
                    </div>
                    <div className="w-1/2">
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Flate/House Number</label>
                            <input type="text" {...register("flatnumber", {required: 'This field is required'})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.flatnumber?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Street</label>
                            <input type="text" {...register("street", {required: 'This field is required'})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.street?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">City</label>
                            <input type="text" {...register("city", {required: 'This field is required'})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.city?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Zipcode</label>
                            <input type="text" {...register("zipcode", {required: 'This field is required'})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.zipcode?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Phone</label>
                            <input type="tel" {...register("phone", {required: 'This field is required', minLength:{value:10, message:'write a valid phone number'}, pattern: {value:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, message: 'Write only numbers'}})} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none"/>
                            <p className="text-xs mt-1 text-red-600">{errors.phone?.message}</p>
                        </div>
                        <button type="submit" className="mt-[10px] block text-white cursor-pointer bg-green-600 border-green-600 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none">Submit</button>
                    </div>
                </div>
                
            </form>
            
        </div>
    )
}