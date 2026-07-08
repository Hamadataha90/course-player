"use client";

import { FaTimes } from "react-icons/fa";

const LeaderBoard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-[410px] max-h-[90vh] rounded-[16px] bg-white shadow-2xl flex flex-col overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition cursor-pointer z-10"
        >
          <FaTimes size={16} />
        </button>

        {/* Header */}
        <div className="text-center pt-5 px-5 pb-4 flex-shrink-0">
          <p className="text-[11px] font-medium text-slate-600">
            Course Name Shown Here
          </p>
          <h2 className="mt-1 text-[18px] font-bold text-[#243C96]">
            Leaderboard
          </h2>
        </div>

        {/* Motivational Box */}
        <div className="mx-4 rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFC] px-4 py-3 flex items-center justify-center flex-shrink-0">
          <p className="text-center text-[12px] leading-5 text-[#2E5BFF]">
            Motivational message will appear here.
          </p>
        </div>

        {/* Students Container */}
        <div className="mt-4 mx-4 mb-4 rounded-[20px] bg-[#F5F9FC] p-4 flex-1 overflow-y-auto">
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-[56px] rounded-[10px] border border-[#ECECEC] bg-white"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeaderBoard;