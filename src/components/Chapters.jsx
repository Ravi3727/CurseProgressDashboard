import React from 'react'
import chapterTimer from '../assets/chapterTimer.png';

const chapterdata = [
    {
        number: 1,
        duration: "05:00:00",
        active: true,
    },
    {
        number: 2,
        duration: "03:15:30",
        active: false,
    },
    {
        number: 3,
        duration: "04:45:20",
        active: false,
    },
    {
        number: 4,
        duration: "02:30:10",
        active: false,
    },
    {
        number: 5,
        duration: "06:20:50",
        active: false,
    }
];

function Chapters() {
    return (
        <>


            <div className='w-full h-full'>
                <table>
                    <tbody className='flex flex-col w-full gap-4 justify-between'>
                        {chapterdata.map((chapter) => (
                            <tr className={`${chapter.active === true ? 'bg-lighttwo' : ''}  flex p-2 rounded-md justify-between gap-3 border-b border-lighttwo w-60`} key={chapter.number}>
                                <td className='text-black font-semibold leading-6'>Chapter {chapter.number}</td>
                                {chapter.active && <td className='text-md leading-6'>
                                    <div>
                                        <img src={chapterTimer} alt="chapterTimer" className='w-4 h-4 inline-block' />
                                        <span className='ml-2 text-chaptertext'>{chapter.duration}</span>
                                    </div>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Chapters