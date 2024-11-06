import React from 'react'
import hamburger from '../assets/Vector.png';
import profileIcon from "../assets/icon.png";
import icon from "../assets/Ellipse 13.png";
function Navbar() {
    return (
        <>

            <div className='w-full h-20 flex justify-between items-center'>

                <div className='flex w-48 h-full justify-between items-center'>

                    <div className='text-3xl'>
                        <img src={hamburger} alt="" />
                    </div>

                    <div className='text-2xl text-customBlue font-bold'>
                        AlgoZenith
                    </div>
                </div>


                <div className='flex w-40 h-full justify-between items-center'>

                    <div className='w-10 h-10 bg-lightBlue rounded-lg flex items-center justify-center'>
                        <img src={profileIcon} alt="" />
                    </div>

                    <div>
                    <div className='w-[63px] h-[63px] '>
                        <img src={icon} alt="" />
                    </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Navbar