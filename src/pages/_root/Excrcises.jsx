import { useNavigate } from "react-router-dom";
import { exercises } from "../../lib/constants";

import icons from "../../lib/icons";
import ExerciseCard from "../../components/ExerciseCard ";
import { useState } from "react";
import Button from "../../components/ui/button";
import Modal from "../../components/shared/Modal";
import ExerciseForm from "./../../components/forms/ExerciseForm";
import ExerciseSideBar from "../../components/ExerciseSideBar";

const Excrcises = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);

  return (
    <>
      <div className="   flex flex-col gap-4 p-4    ">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-bold">حرکت های ورزشی</p>
            <p className="text-[16px] font-semibold text-slate-800 ">
              ​برای تمرین‌های موجود جستجو کنید و تمرین‌های سفارشی خود را ایجاد
              کنید.
            </p>
          </div>

       <div className="flex justify-center items-center gap-2">
           <Modal
             button={
               <Button
                 icon={icons.plus}
                 className={"w-full bg-slate-100 text-black hover:bg-slate-200 border"}
               >
                 افزودن حرکت جدید
               </Button>
             }
           >
             <ExerciseForm />
           </Modal>
           <Modal
             button={
               <Button
                 className={"w-full bg-blue-900 text-white hover:bg-blue-700 border"}
               >
                 انتخاب حرکت
               </Button>
             }
           >
             <ExerciseSideBar
               setCurrent={setCurrent}
               className={
                 "flex flex-col gap-4 w-full flex-1 bg-white p-2 rounded-xl max-w-[684px] min-w-[360px] max-h-[800px] overflow-y-scroll"
               }
             />
           </Modal>
       </div>
        </div>
          <ExerciseCard exercise={exercises[current]} />
       
      </div>
    </>
  );
};

export default Excrcises;
