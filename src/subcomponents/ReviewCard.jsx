import { MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

export default function ReviewCard({ avatarUrl, name, designation, review, imgUrl }) {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    // containerRef is used to SCOPE the GSAP animation.
    // Without this scope, gsap.to('.box') would find and animate EVERY card's box on the screen at the same time.
    // 'scope: containerRef' ensures we only animate the .box inside THIS specific card.
    const containerRef = useRef(null);

    useGSAP(() => {
        if (isImageEnlarged) {
            gsap.to('.box', {
                height: 350,
                duration: 1,
                ease: "power3.inOut" // Smoother easing
            });
        }
        else {
            gsap.to('.box', {
                height: 50,
                duration: 1, // Slightly faster close
                ease: "power3.inOut"
            });
        }
    }, { dependencies: [isImageEnlarged], scope: containerRef }); // Scope is ESSENTIAL for isolation

    return (
        <>
            <div ref={containerRef} className="relative shrink-0 mb-10 ml-10 w-[300px] h-[500px]">
                <div
                    style={{
                        // Rounded corners on ALL edges, including the cutout.
                        // Top-Edge start: (108, 0).
                        // Top-Left Cutout Vertical Edge rounded at top: (96, 12) -> (108, 0).
                        // Top-Left Cutout Inner Corner: (76, 75) -> (96, 55).
                        // Left Edge Top rounded into Cutout: (0, 87) -> (12, 75).
                        clipPath: `path("M 108 0 L 288 0 Q 300 0 300 12 L 300 488 Q 300 500 288 500 L 12 500 Q 0 500 0 488 L 0 87 Q 0 75 12 75 L 76 75 Q 96 75 96 55 L 96 12 Q 96 0 108 0 Z")`
                    }}
                    className="bg-[#f6f7e9] w-full h-full text-[#1e3730] px-3 overflow-auto flex flex-col items-center justify-between">
                    <div className="flex flex-col ml-20 mt-5">
                        <h1 className="inter">{name}</h1>
                        <h1 className="inter-nav">{designation}</h1>
                    </div>
                    <div className="inter-nav mt-3">
                        {!isImageEnlarged ? review : ""}
                    </div>
                    {/* transition-all duration-1000 ease-in-out ${isImageEnlarged ? "h-[350px]" : "h-[50px]"} */}
                    <div className={`box overflow-hidden relative mb-2 rounded-xl w-full h-[50px]`}>
                        <img src={imgUrl} alt="" className="rounded-xl w-full h-full object-cover" />
                        <div className="absolute top-0 right-3 rounded-xl bg-black/60 mt-2 p-1 cursor-pointer z-10" onClick={() => { setIsImageEnlarged(!isImageEnlarged) }}>
                            <MoveRight fill="white" color="white" />
                        </div>
                    </div>

                </div>

                <div className="absolute top-0 left-0 w-[90px] h-[70px] z-50">
                    <img src={avatarUrl} alt="" className="rounded-lg w-full h-full object-cover " />
                </div>
            </div>
        </>
    )
}