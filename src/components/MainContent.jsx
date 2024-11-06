import React from 'react'
import mentorSession from "../assets/mentorSession.png";
import mentorSessionside from "../assets/mentorSessionSide.png";
import HIW from "../assets/HIW.png";
import Chapters from './Chapters';
import Progress from './Progress';
function MainContent() {
    return (
        <>

            <div className='flex flex-col w-11/12 h-full gap-4'>


                <div className='flex w-full h-16 justify-between items-center'>


                    <div className='flex w-6/12 h-14  justify-evenly items-center rounded-lg bg-red-400'
                    style={{background: "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)"}}>
                        <div className='flex gap-2 w-6/12 items-center'>
                            <img src={mentorSession} alt="" />
                            <div className='text-black text-md '>
                                Mentor Sessions
                            </div>
                        </div>
                        <div className='flex gap-2 h-12 border-2 shadow-lg rounded-md justify-center w-5/12 items-center'>
                            <img src={mentorSessionside} alt="" />
                            <div className='text-black text-md font-semibold'>
                                Learning Material
                            </div>
                        </div>
                    </div>




                    <div className='flex gap-2 h-12 border-2 border-lighttwo rounded-md justify-center w-2/12 items-center'>
                        <div>
                            <img src={HIW} alt="" />
                        </div>
                        <div className='text-customBlue text-md font-bold'>
                            How its works
                        </div>
                    </div>


                </div>



                <div className='w-full h-[1px] bg-lighttwo'></div>

                <div className='w-full h-full flex justify-between mt-4'>
                    <div className='w-3/12 h-full '>
                        <Chapters />
                    </div>
                    <div className='w-9/12 mb-4 rounded-xl '>
                        <Progress />
                    </div>
                </div>
            </div>




        </>
    )
}

export default MainContent