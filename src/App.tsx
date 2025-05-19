import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import SignIn from "./pages/_auth/forms/SigninForm";
import AuthLayout from "./pages/_auth/AuthLayout";
import { privateRoutes } from "./routes.js";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const userData = useSelector((state) => state.auth?.userData);
  console.log({ userData });
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route element={<PrivateRoutes userData={userData} />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="/sign-in"
            element={userData ? <Navigate to="/" /> : <SignIn />}
          />
        </Route>

       
      </Routes>
    </Suspense>
  );
}

export default App;
