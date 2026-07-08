import { RxCaretRight } from "react-icons/rx"; 

function Header() {
  return (
    <div className="mx-auto max-w-[1304px] h-[132px]  border-b border-slate-200  px-10 py-6   bg-[#F5F9FA ] ">
      <div className="space-y-2">
        <h3 className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          Home <RxCaretRight /> Courses <RxCaretRight />
          <span className="font-semibold text-slate-900">Course Details</span>
        </h3>
        <h1 className="text-3xl font-bold text-slate-950">Starting SEO as your Home Base</h1>
      </div>
    </div>
  )
}

export default Header
