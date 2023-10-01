import logo from '../images/logo4.svg';
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import bro from '../images/bro.jpg';
import vector from '../images/vector.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const navigate=useNavigate();
    const [first,setF]=useState("");
    const [last,setL]=useState("");
    const [email,setE]=useState("");
    const [pass,setP]=useState("");
    const [rpass,setR]=useState("")
  return (
    <div className='bob h-screen'>
        <div className='bb flex flex-row justify-center items-center'>
                <div style={{height:'85%'}} className="bg-white w-2/3 h- grid lg:grid-cols-2 overflow-auto rounded-tr-3xl rounded-bl-3xl">
                    <div className="m-5   flex flex-col align-middle text-center">
                        <img src={logo} className="h-[40px]"/>
                        <h1 className='text-xl mt-2'>Hello!</h1>
                        <div className='flex items-center'>
                            <hr className="flex-grow border-[1px]"/>
                            <span className="text-sm text-light mt-1 ml-2 mr-2">Create Your Account</span>
                            <hr className="flex-grow border-[1px]"/>
                        </div>
                        <form className='pt-2'>
                            <input className='w-full border-gray-400-solid m-2 h-[45px] pl-3 border-[1px] rounded-md border-gg' placeholder='First Name' value={first} 
                                onChange={(e)=>{
                                    setF(e.target.value)
                                }}
                            />
                            <input className='w-full border-gray-400-solid m-2 h-[45px] pl-3 border-[1px] rounded-md border-gg' placeholder='Last Name' value={last} 
                                onChange={(e)=>{
                                    setL(e.target.value)
                                }}
                            />
                            <input className='w-full border-gray-400-solid m-2 h-[45px] pl-3 border-[1px] rounded-md border-gg' placeholder='Email-id' value={email} 
                                onChange={(e)=>{
                                    setE(e.target.value)
                                }}
                            />
                            <input className='w-full border-gray-400-solid m-2 h-[45px] pl-3 border-[1px] rounded-md border-gg' placeholder='Password' value={pass} 
                                onChange={(e)=>{
                                    setP(e.target.value)
                                }}
                            />
                            <input className='w-full border-gray-400-solid m-2 h-[45px] pl-3 border-[1px] rounded-md border-gg' placeholder='Confirm Password' value={rpass} 
                                onChange={(e)=>{
                                    setR(e.target.value)
                                }}
                            />
                            <button className='m-2 w-full text-center bg-bd text-white text-xl h-[45px] rounded-md'
                                onClick={async(e)=>{
                                    e.preventDefault();
                                    if(email,pass,first,last){
                                        try{
                                            const name=first+last;
                                            const val={
                                                name:name,
                                                email,
                                                password:pass
                                            }
                                            const data=await axios.post('https://xeroo.onrender.com/api/v1/register',
                                            val);
                                            console.log(data);alert('Thank you for registering')
                                            navigate("/login");
                                        }
                                        catch(Err){
                                            console.log(Err);
                                        }
                                    }
                                }} 
                            >Signup</button>
                        </form>
                        <h1 className='text-sm text-light'>OR</h1>
                        <div className='flex w-full m-2 justify-between'>
                                <a href="https://xeroo.onrender.com/api/v1/login/google">
                            <button
                                className='flex justify-between items-center p-2 rounded-md border-[1px] border-gg text-sm h-[45px] text-light'
                            >
                                Signup With Google <img src={image1}/>
                            </button></a>
                            <a href="https://xeroo.onrender.com/api/v1/login/github">
                            <button
                                className='mr-1 flex justify-between items-center p-2 rounded-md border-[1px] border-gg text-sm h-[45px] text-light'
                            >
                                Signup With GitHub<img src={image2}/>
                            </button></a>
                        </div>
                        <div className='text-gg text-sm'>Already have a account? <Link to="/" className='text-blue-600'>LOGIN</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex w-full'>
                            <div className='border-[1px] border-gg mt-[130px] h-[360px]'></div>
                            <img src={bro} className=' mt-20 p-4'/>
                        </div>   
                        <img src={vector} className='b-0'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Signup