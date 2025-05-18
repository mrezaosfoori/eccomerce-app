import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import SignIn from "./pages/_auth/forms/SigninForm"
import AuthLayout from './pages/_auth/AuthLayout';

function App() {
   //const userData = useSelector((state) => state.auth?.userData);
   const userData=false
  return <Suspense fallback={<div>loading</div>}>
    <Routes>
     <Route element={<AuthLayout/>}>
        <Route
           path="/sign-in"
           element={userData ? <Navigate to="/" /> : <SignIn />}
         />
     </Route>
    </Routes>
  </Suspense>;
}

export default App;
