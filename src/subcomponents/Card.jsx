import { Plus } from "lucide-react";

function Card() {
  return (
    <div>
      <div className="p-3 bg-[#f6f7e9] w-full flex flex-col items-center justify-between rounded-xl">
        <div className="flex">
          <div className="text-8xl text-[#1d332c]">200</div>
          <Plus color="#f2ac83" className="mt-3" height={60} width={60} />
        </div>
      </div>
    </div>
  );
}

export default Card;
