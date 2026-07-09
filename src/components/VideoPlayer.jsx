"use client";

import { useState } from 'react';
import { FaBookOpen, FaCommentAlt, FaQuestionCircle, FaTrophy } from 'react-icons/fa'
import AsqQuestion from './AsqQuestion';
import LeaderBoard from './LeaderBoard';




const VideoPlayer = ({onClose, }) => {
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showLeaderBoard, setshowLeaderBoard] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-[799px] w-full">
      <video width="799" height="527" className="w-full h-auto max-w-full rounded-lg" controls >
      </video>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-700">
        <button
          onClick={() => handleScroll('curriculum')}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaBookOpen className="text-blue-600" />
          <span>Curriculum</span>
        </button>
        <button
          onClick={() => handleScroll('comments')}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaCommentAlt className="text-blue-600" />
          <span>Comment</span>
        </button>


        <button
          onClick={() => setShowQuestionModal(true)}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaQuestionCircle className="text-blue-600" />
          <span>Ask a Question</span>
        </button>
        {showQuestionModal && <AsqQuestion onClose={() => setShowQuestionModal(false)} />}


        <button
        onClick={() => setshowLeaderBoard(true)}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaTrophy className="text-blue-600" />
          <span>Leaderboard</span>
        </button>
        {showLeaderBoard && <LeaderBoard   onClose={() => setshowLeaderBoard(false)} />}
      </div>

     
    </div>
  )
}

export default VideoPlayer
