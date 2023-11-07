import eye from '../assets/eye.png'
import { useDispatch } from 'react-redux';
import { showLogin } from '../store/modalSlice';
import { showSignup } from '../store/modalSlice';
import { useState } from 'react';
import ErrorAlert from './ErrorAlert';
import SuccessAlert from './SuccessAlert';
import { setCookie } from '../utils/cookies';
import { useNavigate } from 'react-router-dom';


export default function LoginModal({preventClose = false, backdrop = true, staticModal = false, show = true}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] =  useState(false)
    const navigate =  useNavigate()
    const dispatch = useDispatch()

    const loginNow = async () => {
        
        try{
            
            if(username !== '' && password !== ''){
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/auth/login`, {
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json',
                    },
                    body:JSON.stringify({
                        username:username,
                        password:password
                    })
                });
            

                if(response.status == 200){
                    const {token} = await response.json();
                    setCookie('token', token, 1)
                    setLoading(false)
                    setSuccess(true)
                    setError(false)
                    setUsername('')
                    setPassword('')
                    setTimeout(() => {
                        setSuccess(false)
                        dispatch(showLogin())
                        navigate('/')
                    }, 1500)
                } else {
                    setLoading(false)
                    setError(true)
                    setSuccess(false)
                    setUsername('')
                    setPassword('')
                    setTimeout(() => {
                        setError(false)
                    }, 1500)
                }
            }

        }catch (error){
            setError(true)
            throw error
        }
    }

    
    return(
        <>  
            <div className={`max-w-[463px] animate-fadeIn w-fill h-[420px] bottom-0 left-0 top-0 right-0 m-auto z-30 card-bg rounded-lg p-6 border-2 border-solid anim border-transparent ${staticModal ? 'relative' : 'fixed'}  ${show ? 'block': 'hidden'}`}>
                <button type="button" onClick={() => dispatch(showLogin())} className={`right-5 top-7 absolute h-8 w-8 bg-zinc-900 rounded-full ${preventClose ? 'hidden' : ''} `}> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span></button>
                <h4 className=" text-primary-300 uppercase text-center text-sm font-medium leading-[17px] mt-4 text-zinc-200">WELCOME BACK</h4>
                <h2 className=" text-lg leading-[22px] font-medium text-center mt-3 text-zinc-200">Log into your account</h2>
                <form onSubmit={(e)=>{ e.preventDefault()}} className="mt-10">
                    <div className=" mb-4">
                        <label htmlFor="loginUser" className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Email or Username</label>
                        <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} id="loginUser" placeholder="Enter your email or username" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="loginPassword" className="flex items-center justify-between  text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">Password <a href="#" className="text-xs leading-4 text-green-600">Forgot password?</a> </label>
                        <span className='cursor-pointer h-5 w-5 absolute right-3 bottom-3'><img src={eye} alt="" className="h-5 w-5 object-cover" /></span>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} id="loginPassword"  placeholder="Enter your password" className="mt-[10px] block text-primary-200 pl-3 pr-11 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200" />
                    </div>
                    <button type="submit" className={`flex items-center justify-center mb-3 h-[43px] rounded bg-green-600 text-white text-base leading-[19px] w-full text-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`} onClick={loginNow} disabled={username == '' && password == ''}><span className={`animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full mr-2 ${loading ? 'block': 'hidden'}`} role="status" aria-label="loading"></span> Login now</button>
                    <p className="block text-sm leading-[17px] text-primary-200 font-normal w-full text-zinc-200">Not registered yet? <span className='text-primary-100 cursor-pointer text-green-600' onClick={() => {dispatch(showLogin()), dispatch(showSignup())}}> Register →</span> </p>
                </form>
                {error ? <ErrorAlert trigger={setError}/> : ''}
                {success ? <SuccessAlert trigger={setSuccess}/> : ''}
                
            </div>
            <div className={`backdrop-blur-[2px] top-0 h-full w-full z-20 bg-opacity-70 bg-black fixed ${backdrop ? '': 'hidden'} ${show ? 'block': 'hidden'}`}></div>
        </>

    )
}