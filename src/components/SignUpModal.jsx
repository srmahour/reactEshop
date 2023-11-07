import eye from '../assets/eye.png'
import { useDispatch } from 'react-redux';
import { showSignup } from '../store/modalSlice'
import { showLogin } from '../store/modalSlice';

export default function SignUpModal({preventClose = false, backdrop = true, staticModal = false, show=true}){

    const dispatch = useDispatch()
    
    return(
        <>
            <div className={`max-w-[463px] animate-fadeIn w-fill h-[506px] card-bg bottom-0 left-0 top-0 right-0 m-auto z-30 card-bg rounded-lg p-6 border-2 border-solid border-transparent ${staticModal && staticModal == true ? 'relative' : 'fixed'} ${show ? 'block': 'hidden'}`}>
                <button type="button" onClick={() => dispatch(showSignup())} className={`bg-zinc-900 right-5 top-7 absolute h-8 w-8 bg-primary-700 rounded-full ${preventClose && preventClose == true ? 'hidden' : ''} `}> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span> <span className="h-3 w-[1.25px] bg-white block absolute top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span></button>
                <h4 className="text-zinc-200 uppercase text-center text-sm font-medium leading-[17px] mt-4">SIGN UP</h4>
                <h2 className="text-zinc-200 text-lg leading-[22px] font-medium text-center mt-3">Create an account to continue</h2>
                <form onSubmit={(e)=>{ e.preventDefault()}} className="mt-10">
                    <div className=" mb-4">
                        <label htmlFor="email" className="block text-sm leading-[17px] text-zinc-200 font-normal w-full ">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="user" className="block text-sm leading-[17px] text-zinc-200 font-normal w-full">Username</label>
                        <input type="text" id="user" placeholder="Choose a preferred username" className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor="password" className="flex items-center justify-between  text-sm leading-[17px] text-zinc-200 font-normal w-full">Password</label>
                        <span className='cursor-pointer h-5 w-5 absolute right-3 bottom-3'><img src={eye} alt="" className="h-5 w-5 object-cover" /></span>
                        <input type="password" id="password" placeholder="Choose a strong password" className="mt-[10px] block text-primary-200 pl-3 pr-11 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200" />
                    </div>
                    <button type="submit" className="mb-3  h-[43px] rounded bg-green-600 text-white text-base leading-[19px] w-full text-center">Continue</button>
                    <p className="block text-sm leading-[17px] text-zinc-200 font-normal w-full">Already have an account? <span className='text-green-600 cursor-pointer' onClick={() => {dispatch(showSignup()), dispatch(showLogin())}}> Login →</span> </p>
                </form>
            </div>
            <div className={`backdrop-blur-[2px] top-0 h-full w-full z-20 bg-opacity-70 bg-black fixed ${backdrop && backdrop == true ? '': 'hidden'} ${show ? 'block': 'hidden'} `}></div>
        </>

    )
}