import logo from '../images/logo4.svg';
import { useNavigate } from 'react-router-dom';
const Second = () => {
  const navigate=useNavigate();
  return (
    <div className='bob h-screen'>
        <div className='bb flex flex-row justify-center items-center'>
            <div style={{height:'65%'}} className='bg-white rounded-3xl  w-2/3 flex flex-col  text-center'>
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
                <button className='m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px]'
                  onClick={(e)=>{
                    e.preventDefault();
                    navigate("/main")
                  }}
                >Self Hosting</button>
                <button className='m-2 rounded-md border-[1px] border-gg text-lg h-[45px] w-[266px]'
                 onClick={(e)=>{
                    e.preventDefault();
                    navigate("/main")
                  }}
                >XeroCodee Hosting</button>
            </div>
            </div>  
        </div>
    </div>
  )
}

export default Second