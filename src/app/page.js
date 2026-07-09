import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CourseMaterials from "@/components/CourseMaterials";
import Comments from "@/components/Comments";
import { CourseProvider } from './../context/CourseContext';

export default function Home() {
  return (
    <main >
  <CourseProvider>
      <Header />




      <div className="mx-auto max-w-[1304px] w-full flex flex-col xl:flex-row justify-between gap-8 px-6 md:px-10 mt-[30px] border-px border-[#E1E3E1]">
         {/* Mobile Video Player */}
         <div className="block xl:hidden w-full sticky top-0 bg-white z-20 pb-4">
           <VideoPlayer  />
         </div>

         <div className="flex-1 min-w-0 max-w-full">
           {/* Desktop Video Player */}
           <div className="hidden xl:block">
             <VideoPlayer   />
           </div>
           <CourseMaterials />
           <Comments />
         </div>
        
        <div className="flex-shrink-0">
          <Sidebar  />
        </div>
      </div>
      </CourseProvider>
    </main>
  );
}