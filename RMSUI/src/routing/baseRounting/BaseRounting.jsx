/* eslint-disable no-unused-vars */
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";
  import { useAppDispatch, useAppSelector } from "../app/hooks";
  import React, { useState } from "react";
  import axiosClient from "../api/axiosClienst";
  import { CircularProgress } from "@mui/material";
import authSelector from "../../redux/selector/AuthSelector";
import { authActions } from "../../redux/slice/AuthSlice";
import { Home, Login } from "@mui/icons-material";
import ForgotPassword from "../../pages/forgotPassword/ForgotPassword";
import Regitration from "../../pages/registration/Regitration";
  
  export const BaseRouting = () => {
    const authSelect = useAppSelector(authSelector);
    const dispatch = useAppDispatch();
    const [storageToken, setStorageToken] = useState("");
    React.useEffect(() => {
      if (
        localStorage.getItem("refreshToken") &&
        localStorage.getItem("jwtToken")
      ) {
        dispatch(
          authActions.refreshLogin({
            token: localStorage.getItem("refreshToken"),
          })
        );
        axiosClient.defaults.headers.common = {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        };
      }
      // else{
      //     navigate("/login")
      // }
    }, [dispatch]);
    React.useEffect(() => {
      if (authSelect && authSelect.data && authSelect.data.status) {
        localStorage.setItem(
          "refreshToken",
          authSelect.data.message.refreshToken
        );
        localStorage.setItem("jwtToken", authSelect.data.message.accessToken);
      }
      if (authSelect && authSelect.data && authSelect.data.message) {
        axiosClient.defaults.headers.common = {
          Authorization: `Bearer ${authSelect.data.message.accessToken}`,
        };
      }
    }, [authSelect, authSelect.isFetching]);
  
    return (
      <div className="h-screen w-full">
        <div className="absolute h-screen w-full  flex justify-center items-center ">
          {authSelect?.isFetching && (
            <div className="">
              <CircularProgress size={24} />
            </div>
          )}
        </div>
        <BrowserRouter>
          <Routes>
            <Route>
              {authSelect &&
                authSelect.data &&
                authSelect.data?.message?.accessToken ? (
                <Route path="/*" element={<Home/>} />
              ) : (
                authSelect.isFetching === false && (
                  <Route path="/" element={<Login />} />
                )
              )}
              <Route path="/forgot_password" element={<ForgotPassword/>} />
              <Route path="/registration" element={<Regitration />} />
             
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
  