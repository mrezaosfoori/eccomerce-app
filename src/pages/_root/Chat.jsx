import ChatCard from "../../components/ChatCard";
import { chats } from "../../lib/constants";
import icons from "../../lib/icons";

const Chats = () => {
  return (
    <>
      <div className="w-full  flex flex-col gap-4 p-4  ">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2">
          <div className="flex justify-between items-center gap-1  p-2">
            <p className="text-[20px] font-bold">پیام ها</p>
            <div className="flex gap-2">
              <img src={icons.setting} alt="" className="w-4 h-4 " />
              <img src={icons.note} alt="" className="w-4 h-4 " />
            </div>
          </div>
          <div className="flex gap-4  max-h-[60px]">
            <div className="relative w-full">
              <img
                src={icons.search}
                alt=""
                className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
              />
              <input
                type="text"
                placeholder="..."
                className="bg-white rounded-md w-full h-full px-8 py-2"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {chats.map((item) => {
            return <ChatCard user={item} />;
          })}
        </div>
        {/* <ExerciseCard exercise={exercises[current]} /> */}
      </div>
    </>
  );
};

export default Chats;
