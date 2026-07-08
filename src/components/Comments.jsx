import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const commentsData = [
  {
    id: 1,
    name: 'Student Name Goes Here',
    date: 'Oct 10, 2021',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    name: 'Student Name Goes Here',
    date: 'Oct 15, 2021',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    name: 'Student Name Goes Here',
    date: 'Oct 18, 2021',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

function Comments() {
  return (
    <div  className="mt-[60px] mb-[20px]">
      <h1 className="font-['Spartan'] font-semibold text-[27px] leading-[175%] tracking-normal text-slate-900 ">Comments</h1>

      {/* previous comments section */}
      <div className="flex flex-col gap-5 w-[752px] max-w-full min-h-[524px] rounded-lg p-5">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex flex-row gap-4 items-start pb-5 border-b border-gray-300 last:border-b-0 ">
            <img 
              src={comment.avatar} 
              alt={comment.name} 
              className="w-[50px] h-[50px] rounded-full object-cover shadow-sm" 
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-slate-900 font-semibold text-[15px]">{comment.name}</h4>
              <span className="text-gray-400 text-xs">{comment.date}</span>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>



      

      {/* new comment section */}
      <div id="comments" className="flex flex-col mb-[47px] gap-4 box-border w-[832px] max-w-full min-h-[310px] rounded-lg border border-gray-300 bg-white shadow-sm p-5">
        <textarea 
          className="w-full flex-grow p-2 text-sm text-slate-800 placeholder-gray-400 border-none outline-none resize-none bg-transparent"
          placeholder="Write a comment..."
        />
        <div className="flex justify-start">
          <button className="flex flex-row items-center gap-2 bg-[#2AB08F] hover:bg-[#239579] text-white px-6 py-2.5 rounded-md font-medium text-sm transition-all shadow-sm cursor-pointer">
            Submit Review
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>

      

    </div>
  )
}

export default Comments
