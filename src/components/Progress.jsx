import React, { useState } from 'react';
import chapterTimer from "../assets/chapterTimer.png";
import difficulty from "../assets/difficulty.png";
import copy from "../assets/copy.png";
import dropDown from "../assets/downArrow.png";
import dropUp from "../assets/upArrow.png";
import video from "../assets/newVideo.png";
import article from "../assets/article.png";
import quiz from "../assets/article.png";
import coding from "../assets/code.png";

const progressData = [
  {
    title: "Advanced CSS Techniques",
    duration: "04:15:00",
    difficulty: "Hard",
    content: [
      { title: "Video 1", duration: "20:00" },
      { title: "Article 1", duration: "12:00" },
      { title: "Quiz 1", duration: "07:00" },
      { title: "Coding Exercise 1", duration: "15:00" },
      { title: "Combined Resource 1", duration: "10:00" }
    ],
    completed: 30,
  },
  {
    title: "Introduction to JavaScript",
    duration: "03:30:00",
    difficulty: "Easy",
    content: [
      { title: "Video 2", duration: "15:00" },
      { title: "Article 2", duration: "08:00" },
      { title: "Quiz 2", duration: "05:00" }
    ],
    completed: 70,
  },
  {
    title: "Python for Data Science",
    duration: "05:00:00",
    difficulty: "Medium",
    content: [
      { title: "Video 3", duration: "25:00" },
      { title: "Article 3", duration: "10:00" },
      { title: "Quiz 3", duration: "10:00" },
      { title: "Coding Exercise 3", duration: "20:00" }
    ],
    completed: 0,
  }
];

function Progress() {
  const [expandedParts, setExpandedParts] = useState({});
  
  const togglePart = (index) => {
    setExpandedParts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-6 space-y-4 w-full">
      {progressData.map((part, index) => (
        <div key={index} className="border rounded-lg shadow-md p-4 pb-0 bg-white relative">
          {/* Header Section with Toggle */}
          <div className="flex justify-between items-center pb-2 ">
            <div>
              <h2 className="text-lg text-progressText">Part {index + 1}</h2>
              <h3 className="text-xl font-bold">{part.title}</h3>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 flex items-center">
                <i className=" mr-1"><img className='w-5 h-5' src={chapterTimer} alt="" /></i>{part.duration}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <i className=" mr-1"><img className='w-6 h-6' src={difficulty} alt="" /></i>{part.difficulty}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <i className=" mr-1"><img className='w-5 h-5' src={copy} alt="" /></i>{part.content.length}
              </span>
              <button
                onClick={() => togglePart(index)}
                className="text-gray-500"
              >
                <i className="">
                  {expandedParts[index] ? <div><img className='w-5 h-3' src={dropUp} alt="" /></div> : <div><img className='w-5 h-3' src={dropDown} alt="" /></div>}
                </i>
              </button>
            </div>
          </div>
          
          <div className="absolute right-4  w-28 flex items-center justify-center text-sm border-[1px] border-completeBorder bg-lightBlue rounded-md text-gray-600">{part.completed}% Completed</div>

          {/* Progress Bar */}
          <div className="relative mt-10">
            <div className="w-[724px] p-0 bg-gray-200 -ml-4 rounded-b-lg h-2 overflow-hidden">
              <div
                className="bg-progressbar h-2 rounded-bl-lg"
                style={{ width: `${part.completed}%` }}
              ></div>
            </div>
          </div>

          {/* Content Dropdown */}
          {expandedParts[index] && (
            <div className="space-y-6 mt-14">
              {part.content.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 h-[70px] border-b"
                  style={{
                    borderImage: "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%) 1",
                  }}>
                  <span className="flex items-center space-x-2">
                    <i className="material-icons text-gray-600">
                      {item.title.includes("Video") ? <div className='h-5 w-5'><img src={video} alt="" /></div> :
                        item.title.includes("Article") ? <div className='h-5 w-5'><img src={article} alt="" /></div> :
                          item.title.includes("Quiz") ? <div className='h-5 w-5'><img src={quiz} alt="" /></div> :
                            item.title.includes("Coding") ? <div className='h-5 w-5'><img src={coding} alt="" /></div> : <div className='h-5 w-5'><img src={copy} alt="" /></div>}
                    </i>
                    <span className='font-semibold'>{item.title}</span>
                  </span>
                  <div className='flex gap-2 justify-center items-center mb-4'>
                    <span className='w-4 h-4'><img src={chapterTimer} alt="" /></span>
                    <span className="text-progressText">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Progress;
