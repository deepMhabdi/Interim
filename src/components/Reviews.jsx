import { CircleStopIcon } from "lucide-react";
import ReviewCard from "../subcomponents/ReviewCard";
import { motion } from "motion/react";
export default function Reviews() {
    motion;
    return (
        <>
            <div className="w-full min-h-screen relative">
                <h1 className="md:text-[14rem] text-[6rem] interServices  md:mt-10 mt-15 tracking-tight text-left md:ml-10 ml-5 text-[#1e3730]">Reviews</h1>
                <div className="flex gap-1 absolute top-0 left-0  md:translate-x-48 md:translate-y-25 translate-y- translate-x-26 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] md:text-[0.9rem] text-[1.1rem] font-bold tracking-wide">CLIENTS WORDS</h1>
                </div>

                <div className="flex shrink-0 overflow-hidden w-full">

                    <motion.div
                        animate={{
                            x: '-50%',
                        }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}

                        className="flex gap-3 shrink-0">
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />

                    </motion.div>
                </div>

            </div>

        </>
    )
}   
