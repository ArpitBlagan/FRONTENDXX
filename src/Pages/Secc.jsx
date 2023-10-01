import { CircularProgressbar } from 'react-circular-progressbar';
import grid from '../images/Grid.jpg'
import layer from '../images/Layers.svg'
import heelo from '../images/hello11.svg'
import okk from '../images/okok.svg'
import comp from '../images/comp.svg'
import hard from '../images/hard.svg'
import okkk from '../images/okkk.svg'
import moni from '../images/moni.svg'
import sec from '../images/security.svg'
import vecc from '../images/veccc.svg'
import cco from '../images/Color.svg'
import rec from '../images/rec.svg'
import swi from '../images/switch.svg'
import sync from '../images/Sync.svg'
import aws from '../images/aws.svg'
import gcp from '../images/gcp.svg'
import bit from '../images/bit.svg'
import git from '../images/github.svg'
import lab from '../images/gitlab.svg'
import mongo from '../images/mongo.svg'
import redis from '../images/redis.svg'
import post from '../images/post.svg'
import dot from '../images/dot.svg'
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react'
const Secc = ({name}) => {
    const [per,setP]=useState(0);
    const [selected,setS]=useState([{},{},{}]);
    const first=[
        {
            name:"AWS",
            img:aws,
            col:"kk"
        },{
            name:"GCP",
            img:gcp,
            col:"ff"
        }
    ];
    const second=[
        {
            name:"GitHub",
            img:git,
            col:"gi"
        },{
            name:"GitLab",
            img:lab,
            col:"lab"
        },{
            name:"Bitbucket",
            img:bit,
            col:"bit"
        }
    ];
    const third=[
        {
            name:"MongoDB",
            img:mongo,
            col:"mongo" 
        },{
            name:"RedisDB",
            img:redis,
            col:"redis"
        },{name:"Portgresql",
        img:post,
        col:"post"}
    ];
    const add=(index,ele)=>{
        console.log("click",index)
        const arr=[...selected];
        arr[index]={
            name:ele.name,
            col:ele.col,
            img:ele.img
        }
        let cnt=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].name){
                cnt+=1;
            }
        }
        if(cnt==1){
            setP(36)
        }   
        else if(cnt==2){
            setP(66);
        }
        else if(cnt==3){
            setP(100)
        }
        setS(arr);
    }
    useEffect(()=>{

    },[selected])
  return (
    <div className='flex'>
    <div className="mt-10 text-md font-semibold p-3">
        <div className=' flex   '> 
            <div className='flex rounded-3xl bg-white p-4 text-fit'>
            <img src={grid} className='mr-3'/>
            <h1 className='pr-4'>XeroCodee</h1>
            </div> 
            <img className='ml-[0px]' src={rec}/>
        </div>
        <div className=' flex p-3'>  
            <img src={layer} className='mr-4'/>
            <h1 className=''>Build Center</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={heelo}/>
            <h1 className='p-2'>Service Board</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={okk}/>
            <h1 className='p-2'>Clusters</h1>
        </div>
        <div className=' flex p-3'>  
            <img src={comp} className='mr-4'/>
            <h1 className='p-2'>Database</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={hard}/>
            <h1 className='p-2'>Enivroment</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={okkk}/>
            <h1 className='p-2'>Work Flow</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={moni}/>
            <h1 className='p-2'>Monitoring</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={sec}/>
            <h1>Security</h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={vecc}/>
            <h1 className='p-2'>Web Hooks </h1>
        </div>
        <div className=' flex p-3'>  
            <img className='mr-4' src={cco}/>
            <h1 className='p-2'>Log</h1>
        </div>
    </div>
    <div className=' bg-white rounded-3xl flex-grow m-10 ml-[-25px]'>
        <div className='flex bg-blue-100 bg-opacity-30 rounded-3xl m-3'>
            <div className='flex-grow p-10'>
                <h1 className='text-5xl mb-5 font-semibold'>Hi {name}</h1>
                <span className='text-sm'>Welcome to XeroCodee Ecosystem </span>
            </div> 
            <div className='flex p-10 text-center items-center'>
                <div className='flex'>
                    <span>Test Mode</span>
                    <img src={swi} className='h-[20px] mt-1 mr-3 ml-3'/>
                </div>
                <div>Production Mode</div>
        </div>  
        </div>
        <div className='flex'>
            <div></div>
            <div>
                <div className='m-2'>
                    <h1 className='text-md font-semibold'>Step 1</h1>
                    <span className='text-gg text-sm'>Connect to Cloud</span>
                    <div className='flex'>
                        {first.map((ele,index)=>{
                            return <div className='flex mr-4' key={index}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    add(0,ele);
                                }}
                            >
                        <div className='shadow-md flex p-3 rounded-xl w-[200px] '>
                            <div className='flex flex-col flex-1'>
                                <h1 className='text-lg flex-grow'>{ele.name}</h1>
                                <div className='flex'>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-red-700 m-1'></div>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-green-700 m-1'></div>  
                                <img src={sync} className='mt-[1px]'/>                              
                                </div>
                            </div>
                            <div className={`rounded-xl bg-${ele.col} m-1 p-2 flex justify-center `}>
                                    <img className='p-2' src={ele.img} />
                                </div>
                        </div>
                    </div>
                        })}
                    </div>
                </div>
                <div className='m-2'>
                    <h1 className='text-md font-semibold '>Step 2</h1>
                    <span className='text-gg text-sm'>Connect to Source Code</span>
                    <div className='flex'>
                        {second.map((ele,index)=>{
                            return <div className='flex mr-4 ' key={index}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    add(1,ele);
                                }}
                            >
                        <div className='shadow-md flex p-3 rounded-xl w-[200px] '>
                            <div className='flex flex-col flex-1'>
                                <h1 className='text-lg flex-grow'>{ele.name}</h1>
                                <div className='flex'>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-red-700 m-1'></div>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-green-700 m-1'></div>  
                                <img src={sync} className='mt-[1px]'/>                              
                                </div>
                            </div>
                            <div className={`rounded-xl bg-${ele.col} m-1 p-2 flex justify-center`}>
                                    <img src={ele.img} className='w-[70px]'/>
                                </div>
                        </div>
                    </div>
                        })}
                    </div>   
                </div>
                <div className='m-2'
                >
                    <h1 className='text-md font-semibold '>Step 2</h1>
                    <span className='text-gg text-sm'>Connect to DataSource</span>
                    <div className='flex'>
                        {third.map((ele,index)=>{
                            return <div className='flex mr-4 ' key={index}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    add(2,ele);
                                }}
                            >
                        <div className='shadow-md flex p-3 rounded-xl w-[200px] '>
                            <div className='flex flex-col flex-1'>
                                <h1 className='text-lg flex-grow'>{ele.name}</h1>
                                <div className='flex'>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-red-700 m-1'></div>
                                <div className='h-[10px] w-[10px] rounded-3xl bg-green-700 m-1'></div>  
                                <img src={sync} className='mt-[1px]'/>                              
                                </div>
                            </div>
                            <div className={`rounded-xl bg-${ele.col} m-1 p-2 flex justify-center`}>
                                    <img src={ele.img} className='w-[70px]'/>
                                </div>
                        </div>
                    </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='h-screen rounded-xl shadow-md m-2 flex flex-col items-center p-3'>
                    <h1 className='text-md font-semibold '>Your Progress</h1>
                    <span className='text-gg text-sm mb-5'>toward XeroCodee</span>
                    <div style={{ width: 200, height: 200 }} className='mb-2'>
                <CircularProgressbar styles={{backgroundColor:'rgba(31, 100, 255, 1)'}} value={per} text={`${per}%`}/>
            </div>
                    <button className='bg-gg text-gray-500 h-[28px] rounded p-1 text-center mb-10'>View Details</button>
                    <div>{selected.map((ele,index)=>{
                        return <div className='' key={index}>
                            <h1>Step {index+1}</h1>
                            <div className={`flex bg-${ele.col} rounded-xl p-2`}>
                            <div className='flex-grow w-[160px]'>
                            <h1 className='text-2xl mb-2 '>{ele.name}</h1>
                            <span className='text-sm text-gray-500'>status: Completed</span></div>
                            <div className='flex items-center'>
                            <div className='w-[56px] h-[52px] mr-4 mt-6'><img src={ele.img}/></div>
                            <div>
                                <img src={dot}/>
                                <img src={dot}/>
                                <img src={dot}/>
                            </div></div>
                            </div>
                        </div>
                    })}</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Secc