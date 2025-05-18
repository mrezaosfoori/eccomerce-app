import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import icons from "../../lib/icons";
import CustomInput from "../../components/custom/CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  useCreateClient,
  useGetAllClients,
} from "../../lib/queries/queriesAndMutations";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { clientStatusOptions } from "../../lib/constants";
import ValueFinder from "../../components/shared/ValueFinder";

const BankAccountList = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    data: clients,
    isPending,
    refetch,
    isRefetching,
  } = useGetAllClients();

  if (isPending || isRefetching) {
    return <ClientSkeleton />;
  }
  return (
    <>
      <div className="w-full p-2 h-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-bold">مشتری‌ها</p>
            <p className="text-[16px] font-semibold text-slate-800 ">
              مشتری‌هاتو اینجا اضافه کن تا بتونی مدیریتشون کنی
            </p>
          </div>
          <div className="flex gap-4  max-h-[60px]   justify-end">
            <div className="relative">
              <img
                src={icons.search}
                alt=""
                className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
              />
              <input
                type="text"
                placeholder="..."
                className="bg-white rounded-md md:min-w-[200px] h-full px-8 py-2"
              />
            </div>
            <div
              onClick={() => setShowForm(true)}
              className="bg-main text-white px-1 md:px-4 rounded-lg py-1 md:py-2 flex gap-2 items-center cursor-pointer min-w-[140px]"
            >
              <img src={icons.plus} alt="" className="w-4 h-4 invert" />
              <button>افزودن مشتری</button>
            </div>
          </div>
        </div>

        <div className="w-full p-1">
          {clients?.total ? (
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-right">
              <thead className="bg-slate-300 border">
                <tr>
                  <th className="px-4 py-2"> مشتری</th>
                  <th className="px-4 py-2"> برنامه</th>
                  <th className="px-4 py-2"> 7 روز اخیر</th>
                  <th className="px-4 py-2">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {clients?.documents.map((client, index) => (
                  <tr
                    key={index}
                    className="border bg-white  hover:bg-slate-50"
                  >
                    <td className="px-4 py-2">
                      <div className="flex gap-1 items-center">
                        <img src={icons.avatar} alt="" className="w-4 h-4 " />
                        <p> {client.name || client.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">{client.program}</td>
                   
                    <td className="px-4 py-2">
                      <ValueFinder data={clientStatusOptions} value={client.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>آیتمی وجود ندارد ...</p>
          )}
        </div>
      </div>
      {showForm && (
        <ClientForm onClose={() => setShowForm(false)} refetch={refetch} />
      )}
    </>
  );
};

export default BankAccountList;

const ClientForm = ({ onClose, refetch }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { mutateAsync: createClient, isPending } = useCreateClient();

  const processForm = async (data) => {
    const response = await createClient(data);
    console.log(response, "client");
    if (response) {
      toast.success("لینک دعوت ارسال شد");
      onClose("");
      refetch();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50  ">
      <div className="bg-white p-6 rounded-md shadow-md min-w-[40vw] max-w-[50vw] w-full flex flex-col gap-4 ">
        <h2 className="text-lg font-bold mb-4">افزودن مشتری جدید</h2>
        <p>
          یک یا چند مشتری را دعوت کنید. آن‌ها یک لینک برای پذیرش دعوت شما دریافت
          خواهند کرد و برای دریافت مربی‌ راهنمایی می‌شوند.
        </p>
        <span className="text-purple-900 text-end   mr-auto">
          [بیشتر بدانید]
        </span>
        <form
          onSubmit={handleSubmit(processForm)}
          className={`flex flex-col gap-8 bg-white   `}
        >
          <CustomInput
            register={register}
            name={"email"}
            label={"ایمیل "}
            type={"text"}
            errors={errors.email}
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 border-purple-950 border-2 px-4 py-1 rounded "
            >
              انصراف
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="bg-main text-white px-4 py-1 rounded disabled:bg-slate-400"
            >
              {isPending ? "...ارسال" : "ارسال"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const ClientSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#6d63ff">
      <div className="flex justify-between">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Skeleton className="h-10 " containerClassName="w-36 h-10" />
          <Skeleton className=" h-6 " containerClassName="w-[400px] h-10" />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <Skeleton className=" h-12 " containerClassName="w-24 h-20" />
          <Skeleton className=" h-12 " containerClassName="w-24 h-20" />
        </div>
      </div>

      <div className="w-full p-1 space-y-2">
        {[1, 2, 3].map((client, index) => (
          <Skeleton className=" h-20 " containerClassName="w-24 h-36" />
        ))}
      </div>
    </SkeletonTheme>
  );
};
