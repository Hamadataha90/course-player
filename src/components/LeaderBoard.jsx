"use client";

import { FaTimes } from "react-icons/fa";
import { useCourse } from "@/context/CourseContext";


const LeaderBoard = ({ onClose }) => {

  const { progress } = useCourse();

  const courseName = "React";

  const message = (score) => {
    if (score >= 90) {
      return {
        text: "عظيم يا صديقي! أدائك في الكورس ده أفضل من 90% من باقي الطلاب. كمل عايز أشوف اسمك في الليدربورد هنا! 💪",
        color: "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]",
      };
    } else if (score >= 70) {
      return {
        text: "عاش يا بطل، مستواك ممتاز بس تقدر تجيب أحسن من كدة وتدخل الليدربورد. شد حيلك! 🔥",
        color: "bg-[#FEF7E0] border-[#FEEFC3] text-[#B06000]",
      };
    } else if (score >= 50) {
      return {
        text: "فين الهمة يا صديقي؟ الكورس محتاج شوية تركيز منك والتزام أكتر. مستنيك تشد حيلك! ⚠️",
        color: "bg-[#FCE8E6] border-[#FAD2CF] text-[#C5221F]",
      };
    } else {
      return {
        text: "يا عم ده محتاج شوية تركيز يا صديقي. الكورس محتاج منك مجهود أكتر. مستنيك تشد حيلك! ⚠️",
        color: "bg-[#FCE8E6] border-[#FAD2CF] text-[#C5221F]",
      };
    }
  };




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
            {courseName}
          </p>
          <h2 className="mt-1 text-[18px] font-bold text-[#243C96]">
            Leaderboard
          </h2>
        </div>

        {/* Motivational Box */}
        <p className="text-center text-[12px] leading-5 text-[#2E5BFF]">
          {message(progress).text}
          <span className="font-bold mr-1">
            ({progress}%)
          </span>
        </p>

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