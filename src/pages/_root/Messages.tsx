import MessageCard from "@/components/shared/MessageCard";

const Messages = () => {
  type MessageCardProps = {
    text: string;
    read: boolean;
  // available: number;
};
 
  const ordersData = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", read: false },
    { text: "#Lorem ipsum odor amet, consectetuer adipiscing elit. Mus sodales maximus eros finibus ad justo hac. Eu aenean mi ultrices egestas augue donec.", read: true },
    { text: "#Lorem ipsum odor amet, consectetuer adipiscing elit. Mus sodales maximus eros finibus ad justo hac. Eu aenean mi ultrices egestas augue donec.", read: false },
    { text: "#Lorem ipsum odor amet, consectetuer adipiscing elit. Mus sodales maximus eros finibus ad justo hac. Eu aenean mi ultrices egestas augue donec.", read: false },
  ];


  return (
    <div className=" w-full md:w-[500px]  h-full md:h-fit flex flex-col gap-6 justify-between   rounded-md ">
      <div className=" flex flex-col gap-6 justify-between    rounded-md ">
        <div className="flex justify-center  ">
          <p className="flex-1 text-center  text-white text-[19px] font-bold">
            Notifications
          </p>
        </div>

        {ordersData.map(({text,read}:MessageCardProps) => (
          <MessageCard text={text} read={read}  />
        ))}
      </div>
    </div>
  );
};

export default Messages;
