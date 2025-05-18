import { Outlet, Navigate } from "react-router-dom";
import icons from "../../lib/icons";

const AuthLayout = () => {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="./" />
      ) : (
        <section className="flex flex-1 justify-center items-center  py-10   max-w-[85vw] mx-auto gap-8 h-screen ">
          <div className="bg-white p-8 flex gap-4 rounded-md">
            <Outlet />
            {/* <img
              src={icons.logo}
              alt="logo"
              className="object-cover flex-1 w-1/2 bg-transparent max-h-[400px]"
            /> */}
          </div>
        </section>
      )}
    </>
  );
};

export default AuthLayout;
