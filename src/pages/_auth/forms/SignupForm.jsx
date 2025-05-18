import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/custom/CustomInput";
import { useCreateNewUser } from "../../../lib/queries/queriesAndMutations";
import { toast } from "react-toastify";

export default function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { mutateAsync: createNewUser, isPending } = useCreateNewUser();

  const processForm = async (data) => {
    const response = await createNewUser(data);
    if (response?.status) {
      toast.success("ثبت نام موفقیت آمیز بود");
      navigate("/sign-in");
    }
  };

  return (
    <div className="flex flex-col gap-3 ">
      <p className="text-[#7f7f7f] text-[14px]  md:text-[22px] mb-8  font-bold">
        کاربر گرامی
        <br /> برای ثبت نام اطلاعات زیر را وارد نمایید
      </p>

      <form
        onSubmit={handleSubmit(processForm)}
        className={`flex flex-col gap-8  `}
      >
        <CustomInput
          register={register}
          name={"email"}
          label={"ایمیل "}
          type={"text"}
          errors={errors.email}
        />

        <CustomInput
          register={register}
          name={"password"}
          label={"رمز عبور"}
          type={"text"}
          errors={errors.password}
        />
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-main text-white text-[22px] font-semibold px-3 py-2 rounded-lg disabled:bg-slate-500"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}
