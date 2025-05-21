import React, { useState } from "react";
import { logoutAction } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Navabr from "../../shared/Navabr";
import Products from "./Products";

type Props = {};

const HomePage = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = async () => {
    setLoggingOut(true);
    await dispatch(logoutAction(navigate));
    setLoggingOut(false);
  };
  return (
    <div className="bg-red-100 p-4 dark:bg-slate-700">
      <Navabr />
      {/* <Categorybar /> */}
      <Products />
      <div>HomePage</div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-4 cursor-grab"
      >
        logout
      </button>
    </div>
  );
};

export default HomePage;
