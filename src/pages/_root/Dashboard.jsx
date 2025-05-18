import React, { useContext } from "react";
import icons from "../../lib/icons";
import { dashboardCards } from "../../lib/constants";
import DashboardCard from "../../components/shared/DashboardCard";
import Statistics from "../../components/Statistics";
import LastActivities from "../../components/LastActivities";
import { AuthContext } from "../../lib/context/AuthProvider";


const Dashboard = () => {
  const {user,isPending}  = useContext(AuthContext);
  if(isPending){
    return <p>loading..</p>
  }
  console.log(user?.email,"user")
  return (
    <div className="p-4 flex flex-col gap-6  ">
      <div className="flex flex-col md:flex-row justify-between w-full gap-2 mb-16 ">
        <div className="flex flex-col gap-1">
          <p className="text-[20px] font-bold">سلام {user?.name} !</p>
          <p className="text-[16px] font-semibold text-slate-800 ">
            یک آمار بگیر از اوضاع مشتریات
          </p>
        </div>
        <div className="flex gap-4  max-h-[60px]   justify-end">
          <div className="relative w-full">
            <img
              src={icons.search}
              alt=""
              className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
            />
            <input
              type="text"
              placeholder="..."
              className="bg-white rounded-md md:min-w-[200px] h-full w-full px-8 py-2"
            />
          </div>
          <div className="bg-main text-white px-1 md:px-4 rounded-lg py-1 md:py-2 flex gap-2 items-center cursor-pointer min-w-[160px]">
            <img src={icons.plus} alt="" className="w-4 h-4 invert" />
            <button>افزودن مشتری</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {dashboardCards.map((item) => {
          return <DashboardCard card={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8  ">
        <div className="col-span-2 rounded-tr-[80px]  rounded-bl-[80px] p-8 bg-main">
          <Statistics />
        </div>
        <div className="col-span-1">
          <LastActivities />
        </div>
      </div>
      {/* <div className="flex   gap-4">
        <ActivityCard title={"ایجاد برنامه"} value={1} />
        <ActivityCard title={"دعوت مشتری"} value={3} />
        <ActivityCard title={"برنامه رو منتقل کن"} value={6} />
      </div> */}

      {/* asd
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <p>بیا شروع کنیم!</p>
          <StepTitle title={"ایجاد برنامه"} isDone={true} />
          <StepTitle title={"دعوت مشتری"} isDone={false} />
          <StepTitle title={"برنامه رو منتقل کن"} isDone={false} />
        </div>
        <div className="bg-slate-500 py-2 px-4 h-full">
          <img src={icons.search} alt="" className="w-20 h-20" />
          <p>راهنمای استفاده ار وبسایت</p>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;

const StepTitle = ({ title, isDone }) => {
  return (
    <div className="flex gap-2">
      <img src={icons.search} alt="" className="w-6 h-6" />
      <p>{title}</p>
    </div>
  );
};

const ActivityCard = ({ title, activity }) => {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="flex justify-between">
        <p>{title}</p>
        <img src={icons.search} alt="" className="w-6 h-6" />
      </div>
      <div className="flex justify-between">
        <p>{activity}</p>
        <img src={icons.avatar} alt="" className="w-6 h-6" />
      </div>
    </div>
  );
};
