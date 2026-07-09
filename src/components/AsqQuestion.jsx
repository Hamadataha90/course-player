"use client";

import { FaArrowRight, FaTimes } from "react-icons/fa";
import {useState, useEffect} from 'react'

const AsqQuestion = ({ onClose }) => {
    const [questionText, setQuestionText] = useState('');
   
   
   useEffect(() => {
    if (!sessionStorage) return;
    const storedQuestion = sessionStorage.getItem('question');
    if (storedQuestion) {
      setQuestionText(storedQuestion);
    }
  }, []);
   
   
    const handleText = (e)=>{
const text = e.target.value;
setQuestionText(text);
sessionStorage.setItem('question', text);

   }
  const handleSubmit = () => {
   
    sessionStorage.removeItem('question');
    setQuestionText('');
    onClose();
  }

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[600px] rounded-2xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-[16px] font-bold text-gray-800">Ask a Question</h2>
            <p className="text-[11px] text-gray-400 mt-0.5">Your question will be sent to the instructor</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition cursor-pointer"
          >
            <FaTimes size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-4">
          <textarea
            className="w-full min-h-[160px] resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-[14px] text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#2AB08F] focus:bg-white focus:ring-2 focus:ring-[#2AB08F]/10"
            placeholder="Write your question here..."
            value={questionText}
            onChange={handleText}
          />

          <div className="flex justify-end">
            <button
            onClick={handleSubmit}
             className="flex items-center gap-2 rounded-xl bg-[#2AB08F] px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#239579] active:scale-95 cursor-pointer shadow-sm">
              Submit Question
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AsqQuestion;