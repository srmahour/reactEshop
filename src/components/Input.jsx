export default function Input({type='text', name='name', label='label', value, inputAction, required}){


    if(type == 'submit'){
        return (
            <div className="mb-4">
                <input type={type} name={name} value={value} className="mt-[10px] block text-white cursor-pointer bg-green-600 border-green-600 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
            </div>
        )
    }

    return(
        <div className="mb-4">
            <label className="block text-sm leading-[17px] text-primary-100 font-normal w-full text-zinc-200">{label}</label>
            <input type={type} name={name} required={required} value={value} onChange={(e) => inputAction(e.target.value)} className="mt-[10px] block text-primary-200 px-3 text-base leading-[19px] w-full rounded border-primary-400 border-solid border-[1.5px] h-[43px] font-normal bg-primary-500 placeholder:text-primary-200 focus-visible:shadow-none" />
        </div>
    )
}