import { MoveRight } from "lucide-react";
import { useState } from "react";
export default function ReviewCard({ avatarUrl, name, designation, review, imgUrl }) {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    return (
        <>
            <div
                style={{
                    clipPath: `path("M 96 0 L 288 0 Q 300 0 300 12 L 300 488 Q 300 500 288 500 L 12 500 Q 0 500 0 488 L 0 75 L 76 75 Q 96 75 96 55 L 96 0 Z")`
                }}
                className="bg-[#f6f7e9] w-[300px] h-[500px] text-[#1e3730] rounded-xl px-3 overflow-auto  mb-10 ml-10 flex flex-col items-center justify-between">

                <div className="inter-nav mt-23">
                    {!isImageEnlarged && review}
                </div>
                <div className="overflow-hidden relative mb-2 rounded-xl w-full">
                    <img src={imgUrl} alt="" className={`rounded-xl w-full transition-transform duration-800 ease-in ${isImageEnlarged ? `h-full` : `h-[50px]`} object-cover `} />
                    <div className="absolute top-0 right-3 rounded-xl bg-black/50 mt-2 p-1" onClick={() => { setIsImageEnlarged(!isImageEnlarged) }}>
                        <MoveRight fill="white" color="white" />
                    </div>
                </div>

            </div>

            <div className="absolute top-0 left-1/2 md:translate-x-10 translate-x-24 md:translate-y- w-[90px] h-[70px] ">
                <img src={avatarUrl} alt="" className="rounded-lg w-full h-full object-cover " />
            </div>


        </>
    )
}