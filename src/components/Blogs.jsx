import { CircleStopIcon } from 'lucide-react'
export default function Blogs() {
  return (
    <>
      <div className="bg-[#f6f7e9] relative min-h-screen w-full mt-20 pt-1">

        <h1 className="text-[13rem]  interServices text-center  tracking-tight text-[#1e3730] mt-20 ">Blogs</h1>
        <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-15 translate-y-43 items-center  justify-center">
          <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
          <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide uppercase">articles and insights</h1>

        </div>


      </div>
    </>
  )
}