

import React from 'react'
import { FaRegClock, FaBookOpen, FaUserGraduate, FaGlobe } from 'react-icons/fa'

// left column data
const leftColumnData = [
  { icon: FaRegClock, label: 'Duration:', value: '3 weeks' },
  { icon: FaBookOpen, label: 'Lessons:', value: '8' },
  { icon: FaUserGraduate, label: 'Enrolled:', value: '65 students' },
  { icon: FaGlobe, label: 'Language:', value: 'English' },
];

// right column data
const rightColumnData = [
  { icon: FaRegClock, label: 'Duration:', value: '3 weeks' },
  { icon: FaBookOpen, label: 'Lessons:', value: '8' },
  { icon: FaUserGraduate, label: 'Enrolled:', value: '65 students' },
  { icon: FaGlobe, label: 'Language:', value: 'English' },
];

const CourseMaterials = () => {
  return (
    <div className='mt-[60px]'>
      <h1 className="font-['Spartan'] font-semibold text-[27px] leading-[175%] tracking-normal text-slate-900">Course Materials</h1>

      <div className='mt-[20px] box-border w-[750px] max-w-full min-h-[267px] rounded-lg border border-gray-300 bg-white shadow-sm flex flex-row flex-wrap sm:flex-nowrap items-center gap-6 md:gap-[89px] p-5'>

        {/* left column */}
        <div className="w-[300px] h-[225px] flex flex-col justify-between p-2">
          {leftColumnData.map((item, index) => {
            return (
              <div key={index} className="flex flex-row justify-between items-center">
                <div className='flex flex-row items-center gap-4'>
                  <item.icon className='text-2xl text-gray-500' />
                  <h5 className='text-gray-500 font-medium'>{item.label}</h5>
                </div>
                <h5 className='text-slate-800 font-semibold'>{item.value}</h5> 
              </div>
            );
          })}
        </div>

        {/* right column */}
        <div className="w-[300px] h-[225px] flex flex-col justify-between p-2">
          {rightColumnData.map((item, index) => {
            return (
              <div key={index} className="flex flex-row justify-between items-center">
                <div className='flex flex-row items-center gap-4'>
                  <item.icon className='text-2xl text-gray-500' />
                  <h5 className='text-gray-500 font-medium'>{item.label}</h5>
                </div>
                <h5 className='text-slate-800 font-semibold'>{item.value}</h5> 
              </div>
            );
          })}
        </div>

      </div>
    </div>
  )
}

export default CourseMaterials



































































// import { FaRegClock, FaBookOpen, FaUserGraduate, FaGlobe } from 'react-icons/fa'

// const CourseMaterials = () => {
//   return (
//     <div className='mt-[60px]'>
//       <h1 className='text-xl font-semibold text-slate-900'>Course Materials</h1>


//       <div className='mt-[20px] box-border w-[750px] min-h-[267px] rounded-lg border border-gray-300 bg-white shadow-sm flex flex-row items-center gap-[89px] p-5'>

//         {/* Left Column */}
//         <div className="w-[300px] h-[225px] flex flex-col justify-between p-2">
//           {/* Duration */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaRegClock className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Duration:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>3 weeks</h5> 
//           </div>

//           {/* Lessons */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaBookOpen className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Lessons:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>8</h5> 
//           </div>

//           {/* Enrolled */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaUserGraduate className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Enrolled:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>65 students</h5> 
//           </div>

//           {/* Language */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaGlobe className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Language:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>English</h5> 
//           </div>
//         </div>







//         {/* Right Column */}
//         <div className="w-[300px] h-[225px] flex flex-col justify-between p-2">
//           {/* Duration */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaRegClock className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Duration:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>3 weeks</h5> 
//           </div>

//           {/* Lessons */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaBookOpen className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Lessons:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>8</h5> 
//           </div>

//           {/* Enrolled */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaUserGraduate className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Enrolled:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>65 students</h5> 
//           </div>

//           {/* Language */}
//           <div className="flex flex-row justify-between items-center">
//             <div className='flex flex-row items-center gap-4'>
//               <FaGlobe className='text-2xl text-gray-500' />
//               <h5 className='text-gray-500 font-medium'>Language:</h5>
//             </div>
//             <h5 className='text-slate-800 font-semibold'>English</h5> 
//           </div>
//         </div>

//       </div>


//     </div>
//   )
// }

// export default CourseMaterials


















