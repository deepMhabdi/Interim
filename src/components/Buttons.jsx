import { ArrowBigRight } from "lucide-react"

const Buttons = () => {
  return (
    <div className='flex gap-1 items-center '>
        <div className='bg-[#15372b] text-white text-center font-semibold rounded-2xl px-4 py-3 w-[180px] inter-nav'>Buy Template</div>
    <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center justify-center"><ArrowBigRight color="#4b5a54"/></div>
    </div>
  )
}

export default Buttons