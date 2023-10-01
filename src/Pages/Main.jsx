import logo from '../images/logo4.svg';
import icon from '../images/iconInfo.svg'
import icon2 from '../images/icon2.svg'
import notifi from '../images/notifi.svg'
import sett from '../images/Settings.svg'
import mail from '../images/mail.svg'
import more from '../images/expand.svg'
import icon3 from '../images/icon3.svg'
import { useState } from 'react';
import Secc from './Secc';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Main = () => {
    const [val,setV]=useState({});
    const navigate=useNavigate();
    const check=async()=>{
        try{
        const data=await axios.get('https://xeroo.onrender.com/api/v1/check',{withCredentials:true});
        const vall=data.data.message;console.log(vall,data.data.name);
        if(vall=='not authorized'){
            navigate("/");
        }else{setV(data.data)}
    }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        check();
    },[])
  return (
    <div className='bb '>
        <div className='md:flex pt-4  text-center'>
            <img src={logo} className='mt-2 mr-10'/>
            <div className='flex bg-white rounded-3xl justify-center  items-center'>
                <input className='h-[45px] w-[190px] rounded-3xl pl-3' placeholder="search"/>
                <div className='flex bg-bd rounded-3xl w-[70px] h-[45px] m-1 justify-center  items-center cursor-pointer '>
                    <img className='h-[25px]' src={icon} />
                </div>
            </div>
            <div className='flex-1'></div>
            <div className='flex bg-yell rounded-3xl justify-center  items-center p-2 mr-4'>
                <div className='flex bg-white rounded-3xl justify-center items-center p-1 mr-1'><img src={icon2}/></div>
                <span className='text-md'>Upgrade Plane</span>
            </div>
            <div className='flex justify-center items-center p-2 bg-ss rounded-xl mr-4'>
                <img src={notifi}/>
            </div>
            <div className='flex justify-center items-center p-2 bg-ss rounded-xl mr-4'>
                <img src={mail}/>
            </div>
            <div className='flex justify-center items-center p-2 bg-ss rounded-xl mr-40'>
                <img src={sett}/>
            </div>
            <div className='flex justify-betweem items-center mr-3'>
                <h1>xerocodee</h1>
                <img src={more}/>
            </div>
            <div className='flex justify-center items-center p-2 bg-ss rounded-xl mr-5'>
                <img src={icon3}/>
            </div>
        </div>
        <div>
            <Secc name={val.name} />
        </div>
    </div>
  )
}

export default Main