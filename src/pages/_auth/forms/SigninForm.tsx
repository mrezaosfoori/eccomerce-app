import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/custom/CustomInput";
import { signInAction } from "../../../redux/actions/authActions";
import * as interfaces from "../../../lib/types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";

export default function SigninForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<interfaces.loginFormData>({});
  const dispatch = useDispatch<AppDispatch>();

  const processForm = async (data: interfaces.loginFormData) => {
    await dispatch(signInAction(data, navigate));
  };

  return (
    <div className="flex flex-col gap-3 ">
      <p className="text-[#7f7f7f] text-[14px]  md:text-[22px] mb-8  font-bold">
        کاربر گرامی
        <br /> برای ورود اطلاعات زیر را وارد نمایید
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
          errors={errors}
        />

        <CustomInput
          register={register}
          name={"password"}
          label={"رمز عبور"}
          type={"text"}
          errors={errors}
        />
        <button
          disabled={false}
          type="submit"
          className="w-full bg-red-500 text-white text-[22px] font-semibold px-3 py-2 rounded-lg disabled:bg-slate-500"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
