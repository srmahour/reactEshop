import { Button } from "../components";
import Input from "../components/Input";
import { useState, useEffect } from "react";

export default function Register(){
    const [firstname, setFirstname] =  useState('');
    const [lastname, setLastname] =  useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [flatenumber, setFlateNumber] =  useState('');
    const [city, setCity] = useState('');
    const [street,setStreet] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    const submitFun = (e) => {
        e.preventDefault()

        fetch('https://api.escuelajs.co/api/v1/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    name: firstname,
                    email: email,
                    password: password,
                    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }


    return(
        <div className="container mx-auto lg:max-w-5xl">
            <h1 className="text-center text-2xl my-8 font-bold">User Register</h1>
            <form onSubmit={submitFun}>
                <div className="flex gap-5 p-5 bg-zinc-800">
                    <div className="w-1/2">
                        <Input type="text" required name="firstname" value={firstname} inputAction={setFirstname} label="First Name"/>
                        <Input type="text" required name="lastname" value={lastname} inputAction={setLastname} label="Last Name"/>
                        <Input type="text" required name="username" value={username} inputAction={setUsername} label="Username"/>
                        <Input type="email" required name="email" value={email} inputAction={setEmail} label="Email"/>
                        <Input type="password" required name="password" value={password} inputAction={setPassword} label="Password"/>
                    </div>
                    <div className="w-1/2">
                        <Input type="text" required name="flatenumber" value={flatenumber} inputAction={setFlateNumber} label="Flate/House No"/>
                        <Input type="text" required name="city" value={city} inputAction={setCity} label="City"/>
                        <Input type="text" required name="street" value={street} inputAction={setStreet} label="Street"/>
                        <Input type="text" required name="zipcode" value={zipcode} inputAction={setZipcode} label="Zipcode/Pincode"/>
                        <Input type="text" required name="phone" value={phone} inputAction={setPhone} label="Phone"/>
                        <Input type="submit" inputAction={submitFun} />
                    </div>
                </div>
            </form>
        </div>
    )
}