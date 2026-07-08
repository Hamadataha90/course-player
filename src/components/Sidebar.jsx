import { AiOutlineArrowDown, AiOutlineLock, AiOutlineFileText } from "react-icons/ai";

function Sidebar() {
  const value = 75;
  const progress = `${value}%`;

  const weeks = [
    {
      id: 1,
      title: "Week 1-4",
      desc: "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: 1,
          title: "Introduction",
          duration: "6",
          locked: true,
        },
        {
          id: 2,
          title: "Course Overview",
          duration: "6",
          locked: true,
        },
        {
          id: 3,
          title: "Course Overview",
          question: "0 QUESTION",
          duration: "10 MINUTES",
          locked: false,
        },
        {
          id: 4,
          title: "Course Exercise / Reference Files",
          duration: "6",
          locked: true,
        },
        {
          id: 5,
          title: "Code Editor Installation (Optional if you have one)",
          duration: "6",
          locked: true,
        },
        {
          id: 6,
          title: "Embedding PHP in HTML",
          duration: "6",
          locked: true,
        },
      ],
    },
    {
      id: 2,
      title: "Week 5-8",
      desc: "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: 1,
          title: "Defining Functions",
          duration: "6",
          locked: true,
        },
        {
          id: 2,
          title: "Function Parameters",
          duration: "6",
          locked: true,
        },
        {
          id: 3,
          title: "Return Values From Functions",
          question: "2 QUESTION",
          duration: "15 MINUTES",
          locked: false,
        },
        {
          id: 4,
          title: "Global Variable and Scope",
          duration: "6",
          locked: true,
        },
        {
          id: 5,
          title: "Newer Way of creating a Constant",
          duration: "6",
          locked: true,
        },
        {
          id: 6,
          title: "Constants",
          duration: "6",
          locked: true,
        },
      ],
    },
    {
      id: 3,
      title: "Week 9-12",
      desc: "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        {
          id: 1,
          title: "Introduction to OOP",
          duration: "6",
          locked: true,
        },
        {
          id: 2,
          title: "Classes and Objects",
          duration: "6",
          locked: true,
        },
        {
          id: 3,
          title: "Inheritance & Polymorphism",
          question: "1 QUESTION",
          duration: "20 MINUTES",
          locked: false,
        },
        {
          id: 4,
          title: "Constructors and Destructors",
          duration: "6",
          locked: true,
        },
        {
          id: 5,
          title: "Static Members",
          duration: "6",
          locked: true,
        },
      ],
    },
  ];

  return (


    //  Header Section 
    <div id="curriculum" className="flex flex-col gap-2 w-[424px] max-w-full">
      <h1 className="font-['Spartan'] font-semibold text-[27px] leading-[175%] tracking-normal text-slate-900">
        Topics for This Course
      </h1>







      {/* Progress Bar  */}
      <div className="relative w-full h-[76px] select-none">

        <div className="absolute top-[-5px]  -translate-x-1/2"
          style={{ left: progress }}
        >
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold shadow-sm">
              YOU
            </div>
            <AiOutlineArrowDown className="-mt-1 text-gray-400 text-sm" />
          </div>
        </div>

        <div className="absolute top-[35px] left-0 w-full h-[6px] bg-[#EBEBEB] rounded-full">
          <div className="h-full bg-blue-600 rounded-full "
            style={{ width: progress }}
          />
        </div>

        <div className="absolute bottom-1  -translate-x-1/2"
          style={{ left: progress }}
        >

          <span className="text-[13px] font-semibold text-slate-800">
            {value}%
          </span>
        </div>

      </div>








      {/* AccordionSection  */}
      <div className="flex flex-col gap-6">
        {weeks.map((week) => (
          <div
            key={week.id}
            className="w-[424px] max-w-full h-[542px] bg-white border border-[#E1E3E1] rounded-[8px] p-6 flex flex-col justify-between"
          >
              {/* Card Header */}
              <div>
                <h3 className="text-[22px] font-semibold text-[#1A1C1A] mb-2">{week.title}</h3>
                <p className="text-[14px] text-[#8A92A6] leading-normal font-normal">
                  {week.desc}
                </p>
              </div>

              {/* Lessons List */}
              <div className="flex-1 flex flex-col justify-between mt-4">
                {week.lessons.map((lesson) => (
                  <div key={lesson.id} >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <AiOutlineFileText className="text-[#D8A25E] text-[20px] flex-shrink-0" />
                        <span
                          className={`text-[15px] font-normal transition-colors duration-200 ${
                            lesson.active
                              ? "text-[#3A57E8] font-medium"
                              : "text-[#2E3A59]"
                          }`}
                        >
                          {lesson.title}
                        </span>
                      </div>

                      {lesson.locked ? (
                        <AiOutlineLock className="text-gray-400 text-sm flex-shrink-0" />
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="bg-[#E2F9F0] text-[#00A389] text-[10px] font-bold px-[6px] py-[3px] rounded-[4px] tracking-wider">
                            {lesson.question}
                          </span>
                          <span className="bg-[#FFF0F2] text-[#F25F72] text-[10px] font-bold px-[6px] py-[3px] rounded-[4px] tracking-wider">
                            {lesson.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
