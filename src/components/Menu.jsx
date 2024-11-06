import React from 'react'

import dashboard from '../assets/dashboard.png';
import learn from '../assets/learn.png';
import forum from '../assets/forum.png';
import upskill from '../assets/upskill.png';
import leaderboard from '../assets/leaderboard.png';
import contest from '../assets/contest.png';

const menuData = [
    {
        title: "Dashboard",
        icon: dashboard,
        active: false,
    },
    {
        title: "Learn",
        icon: learn,
        active: false,
    },
    {
        title: "Forum",
        icon: forum,
        active: false,
    },
    {
        title: "Upskill",
        icon: upskill,
        active: true,
    },
    {
        title: "Contest",
        icon: contest,
        active: false,
    },
    {
        title: "Leaderboard",
        icon: leaderboard,
        active: false,
    },

];
function Menu() {
    return (
        <>

            <div className='w-48 h-full '>
                <div className='w-full h-full'>
                    <div className='w-full h-full flex flex-col gap-6'>
                        {menuData.map((item, index) => {
                            return (
                                <div key={index} className={`w-full p-2 gap-8 flex h-10  leading-6 ${item.active === true ? "bg-lighttwo rounded-md" : "bg-white"}
                            `}>
                                    <div className='w-6 h-6'>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className='text-customBlue text-lg font-semibold'>
                                        {item.title}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Menu