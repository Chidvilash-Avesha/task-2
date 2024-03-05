import {useState} from 'react'

import './index.css'
import Replication from '../Replication/index'
import TopHeaderHeading from '../../assets/replicatePageTopHeaderHeading.svg'
import NotifyTab from '../../assets/notifyTab.svg'
import SlicesBtn from '../../assets/SlicesBtn.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import NoteIcon from '../../assets/note.svg'
import WorkClusters from '../../assets/workClusters.svg'
import Arrow from '../../assets/arrow.svg'

function ReplicatePage () {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true)
        console.log(isPopupOpen)
    }

    const clickedCross = () => {
        setPopupOpen(false);
    };


    return(
        <div className='overflow-y-hidden overflow-x-hidden ' >
            {!isPopupOpen ? 
                    ( <div className='w-[1310px] h-[770px] left-[221px]  ' >
                        {/* top header */}
                        <div className='w-[1310px] h-[60px] gap-2.5 bg-white pl-4 pr-[16px,] py-[14px,] border-b-[#B6B8D6] border-[0px,] border-[1px,0px] border-b border-solid items-center' >
                            <div className='w-[1288px] h-[43px] gap-[791px] flex flex-row justify-between mt-3 ' >
                                <img src={TopHeaderHeading} alt="heading" />
                                <button>
                                    <img src={NotifyTab} alt="notify"  />
                                </button>
                            </div>
                        </div>

                        {/* main -content */}
                        <div className='w-[1219px] h-[839px] p-4' >
                            {/* content-header */}
                            <div className='w-[1265px] h-[667px] rounded border gap-4 bg-white border pl-0 pr-[0px,] py-[24px,] border-solid border-[#B6B8D6]' >
                                <div className='w-[1187px] h-10 flex flex-row justify-between pl-6 pr-[24px,] py-[0px,] mt-2' >
                                    <button type="button" >
                                        <img src={SlicesBtn} alt="slices" />
                                    </button>
                                    <div className='w-[383px] h-10 gap-3.5 rounded border bg-white border pl-4 pr-[0px,] pt-[1px,] pb-[0px,] border-solid border-[#B6B8D6] flex flex-row justify-between ' >
                                        <input type="search" placeholder="Search slice from name" className="p-1 w-[300px] cursor-pointer outline-none" />
                                        <button type='button' >
                                            <img src={SearchIcon} alt='searcg icon' className=''  />
                                        </button>
                                    </div>
                                </div>
                                <table className='mt-3 w-[1263px]'  >
                                    <tr className='w-[1187px] h-[50px] bg-[#DEE8FF] text-left '>
                                        <th className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >NAME</th>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >DESCRIPTION</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >QOS PROFILE</th>
                                        <th className='w-[415px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >CLUSTERS</th>
                                    </tr>
                                    <tr className='w-[1187px] h-[50px] text-left ml-1'>
                                        <button className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] font-bold flex flex-row  mt-3 ' >red-slice
                                            <img src={NoteIcon} alt="note-icon" className='w-[20px] h-[20px]' />
                                        </button>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[15px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree ' >this is a slice description</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree '  >High</th>
                                        <th className='w-[455px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px]' >
                                            <div className='flex flex-row' >
                                                <img src={WorkClusters} alt="work-cluster" />
                                                <button type='button' onClick={openPopup} >
                                                    <img src={Arrow} alt="arrow" className='ml-7' />
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </table>
                                <hr className='w-[1260px]' />
                            </div>

                        </div>
                    </div>) : 
                    (<div className='relative blur'>
                        <div className='w-[1310px] h-[770px] left-[221px]  ' >
                            {/* top header */}
                            <div className='w-[1310px] h-[60px] gap-2.5 bg-white pl-4 pr-[16px,] py-[14px,] border-b-[#B6B8D6] border-[0px,] border-[1px,0px] border-b border-solid items-center' >
                                <div className='w-[1288px] h-[43px] gap-[791px] flex flex-row justify-between mt-3 ' >
                                    <img src={TopHeaderHeading} alt="heading" />
                                    <button>
                                        <img src={NotifyTab} alt="notify"  />
                                    </button>
                                </div>
                            </div>

                            {/* main -content */}
                            <div className='w-[1219px] h-[839px] p-4' >
                                {/* content-header */}
                                <div className='w-[1265px] h-[667px] rounded border gap-4 bg-white border pl-0 pr-[0px,] py-[24px,] border-solid border-[#B6B8D6]' >
                                    <div className='w-[1187px] h-10 flex flex-row justify-between pl-6 pr-[24px,] py-[0px,] mt-2' >
                                        <button type="button" >
                                            <img src={SlicesBtn} alt="slices" />
                                        </button>
                                        <div className='w-[383px] h-10 gap-3.5 rounded border bg-white border pl-4 pr-[0px,] pt-[1px,] pb-[0px,] border-solid border-[#B6B8D6] flex flex-row justify-between ' >
                                            <input type="search" placeholder="Search slice from name" className="p-1 w-[300px] cursor-pointer outline-none" />
                                            <button type='button' >
                                                <img src={SearchIcon} alt='searcg icon' className=''  />
                                            </button>
                                        </div>
                                    </div>
                                    <table className='mt-3 w-[1263px]'  >
                                        <tr className='w-[1187px] h-[50px] bg-[#DEE8FF] text-left '>
                                            <th className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >NAME</th>
                                            <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >DESCRIPTION</th>
                                            <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >QOS PROFILE</th>
                                            <th className='w-[415px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >CLUSTERS</th>
                                        </tr>
                                        <tr className='w-[1187px] h-[50px] text-left ml-1'>
                                            <th className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] flex flex-row  mt-3 ' >red-slice
                                                <img src={NoteIcon} alt="note-icon" className='w-[20px] h-[20px]' />
                                            </th>
                                            <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[15px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree ' >this is a slice description</th>
                                            <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree '  >High</th>
                                            <th className='w-[455px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px]' >
                                                <div className='flex flex-row' >
                                                    <img src={WorkClusters} alt="work-clusters" />
                                                    <button type='button' onClick={openPopup} >
                                                        <img src={Arrow} alt="arrow" className='ml-7' />
                                                    </button>
                                                </div>
                                            </th>
                                        </tr>
                                    </table>
                                    <hr className='w-[1260px]' />
                                </div>
                            </div>
                        </div>
                    </div> )
            }
            {isPopupOpen && (
            <div className="fixed right-0 top-0 bottom-0 bg-white shadow-md p-4">
                <Replication clickedCross = {clickedCross} />
            </div>
            )}
        </div>
    )
}

export default ReplicatePage