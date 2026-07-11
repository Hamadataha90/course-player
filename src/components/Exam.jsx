"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const QUESTIONS = [
  {
    id: 1,
    text: "What is the main difference between Server Components and Client Components in Next.js App Router?",
    options: [
      "Server Components run in the browser only",
      "Client Components don't support JavaScript",
      "Server Components render on the server and ship no JS to the browser",
      "There is no difference between them",
    ],
    correct: 2,
  },
  {
    id: 2,
    text: "What is the purpose of the `useEffect` hook in React?",
    options: [
      "Managing state inside a component",
      "Performing side effects like data fetching or subscriptions",
      "Passing data between components",
      "Optimizing rendering performance",
    ],
    correct: 1,
  },
  {
    id: 3,
    text: "Which of the following is the correct way to implement Static Site Generation (SSG) in Next.js 14?",
    options: [
      "Using `getStaticProps` in the pages directory",
      "Setting `force-static` in fetch or using static data in a Server Component",
      "Using the `useStaticProps` hook",
      "Using the `next/static` package",
    ],
    correct: 1,
  },
  {
    id: 4,
    text: "Which React hook should you use to avoid recalculating an expensive value on every render?",
    options: ["useCallback", "useRef", "useMemo", "useReducer"],
    correct: 2,
  },
  {
    id: 5,
    text: "In Next.js App Router, where should shared layouts between pages be placed?",
    options: [
      "In `_app.jsx` inside the pages directory",
      "In `layout.jsx` or `layout.tsx` inside the app directory",
      "In a components folder using a Higher-Order Component (HOC)",
      "In `next.config.js`",
    ],
    correct: 1,
  },
];

const TOTAL_SECONDS = 10 * 60;

const Exam = ({ onClose }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (submitted) return;
    if (secondsLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, submitted]);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSelect = (optionIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }));
  };

  const handleSubmit = () => setSubmitted(true);

  const score = submitted
    ? QUESTIONS.reduce((acc, q, i) => (answers[i] === q.correct ? acc + 1 : acc), 0)
    : 0;

  const percentage = submitted ? Math.round((score / QUESTIONS.length) * 100) : 0;

  const resultColor =
    percentage >= 80 ? "text-emerald-500" : percentage >= 60 ? "text-amber-500" : "text-rose-500";

  const resultBg =
    percentage >= 80
      ? "bg-emerald-50 border-emerald-200"
      : percentage >= 60
      ? "bg-amber-50 border-amber-200"
      : "bg-rose-50 border-rose-200";

  const resultEmoji = percentage >= 80 ? "🎉" : percentage >= 60 ? "💪" : "📚";

  const resultText =
    percentage >= 80
      ? "أداء ممتاز! أنت فاهم المادة كويس جداً."
      : percentage >= 60
      ? "كويس! بس لازم تراجع شوية نقاط."
      : "محتاج تراجع المادة تاني وتحاول مرة أخرى.";

  const q = QUESTIONS[currentQ];
  const selectedOption = answers[currentQ] ?? null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[440px] max-h-[90vh] rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition cursor-pointer z-10"
        >
          <FaTimes size={15} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center px-6 py-8 gap-4">
            <div className="text-5xl">{resultEmoji}</div>
            <h2 className="text-[20px] font-bold text-[#243C96]">نتيجة الامتحان</h2>

            <div className={`flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 ${resultBg}`}>
              <span className={`text-3xl font-extrabold ${resultColor}`}>{score}/{QUESTIONS.length}</span>
              <span className={`text-[11px] font-medium ${resultColor}`}>{percentage}%</span>
            </div>

            <p className={`text-[13px] font-medium text-center px-2 py-2 rounded-xl border ${resultBg} ${resultColor}`}>
              {resultText}
            </p>

            <div className="w-full mt-2 space-y-2 overflow-y-auto max-h-[220px] pr-1">
              {QUESTIONS.map((question, qi) => {
                const userAns = answers[qi];
                const isCorrect = userAns === question.correct;
                return (
                  <div
                    key={qi}
                    className={`rounded-xl border px-4 py-3 text-[12px] ${
                      isCorrect
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : "bg-rose-50 border-rose-200 text-rose-800"
                    }`}
                  >
                    <p className="font-semibold mb-1">Q{qi + 1}: {question.text}</p>
                    <p>
                      <span className="font-medium">إجابتك: </span>
                      {userAns !== undefined ? question.options[userAns] : "لم تجب"}
                    </p>
                    {!isCorrect && (
                      <p>
                        <span className="font-medium">الإجابة الصحيحة: </span>
                        {question.options[question.correct]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="w-full mt-1 py-2.5 rounded-xl bg-[#243C96] text-white font-semibold text-[13px] hover:bg-[#1a2d72] transition active:scale-95 cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <>
            <div className="bg-[#243C96] px-5 pt-5 pb-4 flex-shrink-0">
              <div className="flex justify-center mb-4">
                <div
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[13px] font-bold shadow-md ${
                    secondsLeft <= 60 ? "bg-rose-500 animate-pulse" : "bg-[#F4A623]"
                  }`}
                >
                  <span>⏱</span>
                  <span>{formatTime(secondsLeft)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                {QUESTIONS.map((_, qi) => {
                  const answered = answers[qi] !== undefined;
                  const isActive = qi === currentQ;
                  return (
                    <button
                      key={qi}
                      onClick={() => setCurrentQ(qi)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold border-2 transition cursor-pointer
                        ${
                          isActive
                            ? "bg-white text-[#243C96] border-white scale-110 shadow-lg"
                            : answered
                            ? "bg-[#2AB08F] text-white border-[#2AB08F]"
                            : "bg-transparent text-white border-white/60 hover:border-white"
                        }`}
                    >
                      {answered && !isActive ? <FaCheck size={10} /> : qi + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto px-5 py-5 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-[#243C96] uppercase tracking-wide">
                  Question {currentQ + 1}
                </span>
                <p className="mt-1 text-[14px] font-medium text-gray-800 leading-relaxed">
                  {q.text}
                </p>
              </div>

              <div className="space-y-2.5">
                {q.options.map((option, oi) => {
                  const isSelected = selectedOption === oi;
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(oi)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-[13px] font-medium transition cursor-pointer active:scale-[0.98]
                        ${
                          isSelected
                            ? "bg-[#243C96] border-[#243C96] text-white shadow-md"
                            : "bg-white border-gray-200 text-gray-700 hover:border-[#243C96] hover:bg-[#F0F3FF]"
                        }`}
                    >
                      <span
                        className={`w-6 h-6 flex-shrink-0 rounded-full border flex items-center justify-center text-[11px] font-bold
                          ${
                            isSelected
                              ? "bg-white text-[#243C96] border-white"
                              : "border-gray-300 text-gray-500"
                          }`}
                      >
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="px-5 pb-5 flex items-center justify-between gap-3 flex-shrink-0 border-t border-gray-100 pt-4">
              <button
                onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                disabled={currentQ === 0}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-[13px] font-semibold hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                ← Previous
              </button>

              {currentQ < QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentQ((q) => Math.min(QUESTIONS.length - 1, q + 1))}
                  className="flex-1 py-2.5 rounded-xl bg-[#243C96] text-white text-[13px] font-semibold hover:bg-[#1a2d72] transition active:scale-95 cursor-pointer"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-2.5 rounded-xl bg-[#2AB08F] text-white text-[13px] font-semibold hover:bg-[#239579] transition active:scale-95 cursor-pointer"
                >
                  Submit ✓
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exam;
