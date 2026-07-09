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
        {/* Left Column - acts as layout contents on mobile to allow the video to stick globally, and as a flex-1 block on desktop */}
        <div className="contents xl:block xl:flex-1 xl:min-w-0 xl:max-w-full">
          {/* Video Player - sticky top on mobile, normal position on desktop */}
          <div className="sticky top-0 bg-white z-20 pb-4 w-full xl:relative xl:pb-0 xl:z-0">
            <VideoPlayer />
          </div>
          <CourseMaterials />
          <Comments />
        </div>
        
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
      </div>
      </CourseProvider>
    </main>
  );
}