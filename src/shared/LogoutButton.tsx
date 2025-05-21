import React, { useState } from "react";
import { logoutAction } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

type Props = {};

function LogoutButton({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = async () => {
    setLoggingOut(true);
    await dispatch(logoutAction(navigate));
    setLoggingOut(false);
  };
  return (
    <img
      onClick={handleLogout}
      src="/assets/icons/logout.svg"
      width={16}
      height={16}
      className=" cursor-pointer"
      alt="Search Icon"
    />
  );
}

export default LogoutButton;
