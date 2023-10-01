import logo from '../images/logo4.svg';
import { useState } from 'react';
import { useBeforeUnload, useNavigate } from 'react-router-dom';
const First = () => {
    const navigate=useNavigate();
    const [comp,setC]=useState("");
    const [org,setO]=useState("");
    const [sele,setS]=useState("");
  return (
    <div className='bob h-screen'>
        <div className='bb flex flex-row justify-center items-center'>
            <div style={{height:'65%'}} className='bg-white rounded-3xl  w-2/3 flex flex-col  text-center overflow-auto'>
            <img src={logo} className="h-[40px] mt-10"/>
            <h1 className='md:text-3xl'>Welcom {} !</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center justify-around w-[400px]'>
                            <hr className="flex-grow border-[1px]"/>
                            <span className="text-sm text-light mt-1 ml-2 mr-2">Choose From The Following</span>
                            <hr className="flex-grow border-[1px]"/>
                </div>
            </div>
            <div className='lg:flex justify-around mt-20'>
                <button
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/second");
                    }}
                 className='m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px]'>Developer</button>
                <button 
                    onClick={(e)=>{
                        e.preventDefault();
                        setS("org");
                    }}
                    className={sele=="org"?'m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px] bg-bd':'m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px]'}>Oragnization</button>
                <button
                    onClick={(e)=>{
                        e.preventDefault();
                        setS("com")
                    }} 
                    className={sele=="com"?'m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px] bg-bd':'m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px]'}>Company</button>
            </div><div className='flex justify-center mt-20 mb-10'>
            {sele==""?<div></div>:
                    (sele=="org")?<div className='lg:flex justify-between'>
                        <input value={org} onChange={(e)=>{setO(e.target.value)}}  className='h-[45px] flex-1 border-[1px] broder-gg rounded-md ml-3 w-[300px]' placeholder='Organization Name'/>
                        <button className='pl-2 ml-4 h-[45px] rounded-md bg-bd p-2 text-white w-[100px]'
                            onClick={(e)=>{
                        e.preventDefault();
                        if(org){
                        navigate("/second");}
                    }}
                        >Sumbit</button>
                    </div>:
                    <div className='flex justify-between'>
                        <input value={comp} onChange={(e)=>{setC(e.target.value)}} className='pl-2 h-[45px] flex-1 border-[1px] broder-gg rounded-md ml-3 w-[300px]' placeholder='Company Name'/>
                        <button className='ml-4 h-[45px] rounded-md bg-bd p-2 text-white w-[100px]'
                            onClick={(e)=>{
                        e.preventDefault();
                        if(comp){
                        navigate("/second");}
                    }}
                        >Sumbit</button>
                    </div>
            }</div>
            </div>  
        </div>
    </div>
  )
}

export default First