import { ArrowRight } from "lucide-react";

const Buttons = ({ title, onClick }) => {
  return (
    <a href="#">
      <div className="flex gap-1 items-center group  group-hover:gap-0" onClick={onClick}>
        <div className="bg-[#15372b] text-white text-center font-semibold rounded-2xl  py-3  w-[150px] inter-nav group-hover:-mr-0.5 group-hover:transtion-transform group-hover:duration-500 group-hover:ease-in-out group-hover:rounded-br-none ">
          {title}
        </div>
        <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center mb-[1px] justify-center group-hover:-ml-0.5 group-hover:transtion-transform group-hover:duration-500 group-hover:ease-in-out group-hover:rounded-bl-none">
          <ArrowRight color="#4b5a54" />
        </div>
      </div>
    </a>
  );
};

export default Buttons;
