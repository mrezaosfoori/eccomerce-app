type MessageCardProps = {
  text: string;
  read: boolean;
};

const MessageCard = (props: MessageCardProps) => {
  const { text, read } = props;

  return (
    <div className="flex justify-between items-center gap-8 px-4 py-5 bg-[#342F3F] w-full rounded-md">
      <div className="relative  min-w-[40px]">
        <img
          src="/assets/icons/message-main.svg"
          alt=""
          className="w-10 h-10 object-cover  "
        />
        {read && (
          <div className="bg-red absolute top-0 right-0 w-3 h-3 rounded-full">
            {" "}
          </div>
        )}
      </div>

      <div className="flex gap-1 max-h-[50px]  overflow-hidden ">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageCard;
