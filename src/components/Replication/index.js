import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import './index.css'

import NavLogo from '../../assets/replicaNavLogo.svg';
import NavCross from '../../assets/navCross.svg';
import ReplicaImage from '../../assets/replicationImage.svg';



const Replication = (props) =>{

    const {clickedCross} = props
    const onClickingCross = () =>{
        clickedCross(true)
    }

    return (
        <div className='w-[560px] h-[760px]  background: #ffffff overflow-y-hidden overflow-x-hidden '>

            {/* nav*/}
            <div className=' w-[Fill_(250px)] h-[Hug_(46px)] gap-[30px] flex flex-row justify-between pl-6 pr-[24px,] py-[16px,] p-5 border-b-[#D9DFEE] border-[0px,] border-[1px,0px] border-b border-solid' >
                    <div className='w-[Hug_(274.79px)] h-[Hug_(44px)] gap-3 flex flex-row'>
                        <img src={NavLogo}alt="nav-logo" />
                        <div className='w-[(234px)] h-[(44px)] gap-1 flex flex-col' >
                            <h1 className='w-[234px] h-6 text-2xl font-semibold leading-6 tracking-normal text-left font-family: Bai Jamjuree  text-[#12153e]' >
                                Replicate Resources
                            </h1>
                            <h1 className='w-[65px] h-4 text-base font-medium leading-4 tracking-normal text-left text-[#2868F3] font-family: Bai Jamjuree' >
                               red-slice
                            </h1>
                        </div>
                    </div>
                    <div className='w-[30px] h-[30px] pl-[5.17px] pr-[5.19px,] pt-[5px,] pb-[5.36px,] ml-auto mt-auto mb-auto ' >
                        <button type="button" className='' onClick={onClickingCross} >
                            <img src={NavCross} alt= "nav-cross" className='w-[30px] h-[30px] pl-[5.17px] pr-[5.19px,] pt-[5px,] pb-[5.36px,]' />
                        </button>
                    </div>
            </div>
            <div className='w-[1442px] h-[9px] border-[#0000009E] background: #0000009e' ></div>

            {/* image*/}
            <div className='w-[Fill_(560px)] h-[215px] rounded gap-6 flex flex-col justify-center items-center p-6 ml-auto mr-auto' >
                <div className='w-[Fill_(512px)] h-[Fill_(708px)]' >
                    <img src={ReplicaImage} alt="replication-img" classname="w-[274px] h-32 ml-auto mr-auto " />
                    <h1 className='w-[334px] h-[18px] text-sm font-bold leading-[18px] tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree mt-6' >
                        6/10  Replication of ServiceAccounts in progress ...
                    </h1>
                    <div>
                        <LinearProgress variant="buffer" value={60} className="mt-5" />
                    </div>
                </div>

            </div>

            {/*details box */}
            <div className='w-[Fill_(400px)] h-[Fill_(446px)] border gap-3 border p-3 rounded-[14px] border-solid border-[#CCE2FD] ml-10 mr-10' >
                <div className='w-[Fill_(464px)] h-[Hug_(18px)] gap-2.5 flex flex-row justify-around' >
                    <h1 className='w-[217px] h-[18px] text-base font-medium leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree' >Slice Name:</h1>
                    <h1 className='w-[150px] h-[18px] text-base font-normal leading-5 tracking-normal text-left text-[#2868F3] font-family: Bai Jamjuree' >red-slice-1</h1>
                </div>
                <div className='w-[Fill_(464px)] h-[Hug_(18px)] gap-2.5 flex flex-row justify-around mt-8' >
                    <h1 className='w-[217px] h-[18px] text-base font-medium leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree' >Source Cluster:</h1>
                    <h1 className='w-[150px] h-[18px] text-base font-normal leading-5 tracking-normal text-left text-[#828490] font-family: Bai Jamjuree' >worker-cluster-1</h1>
                </div>
                <div className='w-[Fill_(464px)] h-[Hug_(18px)] gap-2.5 flex flex-row justify-around mt-8' >
                    <h1 className='w-[217px] h-[18px] text-base font-medium leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree' >Destination Cluster</h1>
                    <h1 className='w-[150px] h-[18px] text-base font-normal leading-5 tracking-normal text-left text-[#828490] font-family: Bai Jamjuree' >worker-cluster-2</h1>
                </div>
                <div>
                    <div className='w-[Fill_(464px)] h-[Hug_(18px)] gap-2.5 flex flex-row justify-around mt-8' >
                        <h1 className='w-[949px] h-[18px] text-base font-medium leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree ml-4' >Namespaces:</h1>
                    </div>
                    <div className='w-[Fill_(464px)] h-[Hug_(18px)] gap-2.5 flex flex-row justify-around mt-1' >
                        <h1 className='w-[949px] h-[18px] text-base font-medium leading-5 tracking-normal text-left text-[#828490] font-family: Bai Jamjuree ml-4' >Namespaces on worker-cluster-1</h1>
                    </div>
                    <div className='w-[Fill_(464px)] h-[Hug_(162px)] rounded border gap-3 border p-3 mt-3 m-auto border-solid border-[#E1EBFF] bg-[#f3f6ff] ' >
                        <div className='w-[Fill_(464px)] h-[Hug_(38px)] gap-4 flex flex-row justify-around flex-wrap' >
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-1</h1>
                            </div>
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-2</h1>
                            </div>
                        </div>
                        <div className='w-[Fill_(464px)] h-[Hug_(38px)] gap-4 flex flex-row justify-around flex-wrap mt-2' >
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-3</h1>
                            </div>
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-4</h1>
                            </div>
                        </div>
                        <div className='w-[Fill_(464px)] h-[Hug_(38px)] gap-4 flex flex-row justify-around flex-wrap mt-2' >
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-5</h1>
                            </div>
                            <div className='w-[Fill_(200px)] h-[Hug_(38px)] rounded gap-2 bg-[#E3EAFF] pl-4 pr-[16px,] py-[10px,]' >
                                <h1 className='w-[97px] h-[30px] text-sm font-medium leading-[18px] tracking-normal text-left text-[#5A607C] m-auto mt-1 font-family: Bai Jamjuree' >Namespace-6</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Replicate button */}
            <button className='cursor-pointer rounded w-[540px] h-[45px] bg-[#B3B5B9] text-center pl-6 pr-[24px,] py-[10px,] outline: none ml-3 mt-3' >
                Replicate
            </button>
        </div>
    )


}

export default Replication