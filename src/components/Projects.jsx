
import { CircleStopIcon } from "lucide-react";

export default function Projects() {
    return (
        <>
            <div className="w-full min-h-screen relative  px-4 py-4  overflow-hidden">

                <h1 className="text-services interServices text-center  tracking-tight text-[#1e3730]">Projects</h1>
                <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-65 translate-y-32 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] text-[0.8rem] font-bold interCard tracking-tight uppercase">Our Portfolio</h1>

                </div>
            </div>
        </>
    )
}