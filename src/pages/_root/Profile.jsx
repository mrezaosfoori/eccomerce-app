import React, { useContext, useState } from "react";
import { AuthContext } from "../../lib/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUpdateAccount } from "../../lib/queries/queriesAndMutations";
import { toast } from "react-toastify";
import CustomInput from "../../components/custom/CustomInput";
import icons from "../../lib/icons";

// Reusable ProfileCard
const ProfileCard = ({ title, value }) => (
  <div className="text-gray-500 flex flex-col gap-2 p-2 bg-slate-200">
    <p className="text-[12px] md:text-[14px] text-neutral-40 font-semibold">
      {title}
    </p>
    <p className="text-[16px] md:text-[18px] text-dark font-semibold mx-auto">
      {value}
    </p>
  </div>
);

// Form to Edit Profile
const ProfileForm = ({ onClose }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const { mutateAsync: updateAccount, isPending } = useUpdateAccount();

  const processForm = async (data) => {
    const response = await updateAccount(data);
    if (response?.current) {
      toast.success("ورود موفقیت آمیز بود");
      navigate("/");
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
        <form
          onSubmit={handleSubmit(processForm)}
          className={`flex flex-col gap-8 bg-white   `}
        >
          <CustomInput
            register={register}
            name={"name"}
            label={"نام"}
            type={"text"}
            errors={errors.name}
          />
          <CustomInput
            register={register}
            name={"email"}
            label={"ایمیل "}
            type={"text"}
            errors={errors.email}
          />
          <CustomInput
            register={register}
            name={"phone"}
            label={"موبایل "}
            type={"text"}
            errors={errors.phone}
          />
          <CustomInput
            register={register}
            name={"password"}
            label={"رمز عبور "}
            type={"text"}
            errors={errors.password}
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-500">
              انصراف
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Profile Component
const Profile = ({ data }) => {
  const { user, isPending } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [profileData, setProfileData] = useState(user);

  if (isPending) {
    return <p>loading ..</p>;
  }

  const handleSave = (updatedData) => {
    // You can call API here to update profile
    setProfileData({ ...profileData, ...updatedData });
  };

  return (
    <div className="w-full h-screen bg-main p-4 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 border border-gray-200 bg-white p-4 min-w-[70vw]   ">
        <img
          src={icons.avatar}
          alt="Logo"
          className="rounded-full w-[300px] h-[400px] bg-white  p-1 mx-auto"
        />
        <div className="grid grid-cols-2 gap-4">
          <ProfileCard title="نام" value={user.name} />
          <ProfileCard title="ایمیل" value={user.email} />
          <ProfileCard title="موبایل" value={user.phone} />
          <ProfileCard title="شناسه" value={user.$id} />
        </div>
        <button
          className="mr-auto bg-main text-white px-4 py-1 rounded"
          onClick={() => setShowForm(true)}
        >
          ویرایش پروفایل
        </button>
      </div>
      {showForm && (
        <ProfileForm
          user={profileData}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Profile;
