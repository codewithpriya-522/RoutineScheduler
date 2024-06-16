// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { AiOutlineSchedule } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/slice/AuthSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(false);

  
  useEffect(() => {
    if (auth && auth.data && auth.data.status === false && auth.data.message && auth.data.message === "Invalid user") {
      setMessage(true);
    } else {
      setMessage(false);
    }

    if (auth && auth.data && auth.data.status === true) {
      toast.success('Login successful');
      navigate('/home');
    }
  }, [auth, navigate]);

  const handleLogin = () => {
    const loginDTO = { username, password };
    dispatch(authActions.login(loginDTO));
    navigate('/home')
  };

  return (
    <div className="flex bg-gray-50 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <AiOutlineSchedule className="mx-auto h-10 w-auto text-[#02457A]" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#02457A]">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 bg-white rounded-lg shadow dark:border p-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[#02457A]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block px-1 w-full rounded-md border-0 py-1.5 text-[#02457A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#02457A]"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  onClick={() => navigate('/forgotPassword')}
                  className="font-semibold text-[#02457A] hover:text-[#001B48]"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block px-1 w-full rounded-md border-0 py-1.5 text-[#02457A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-[#02457A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#001B48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
            >
              Sign in
            </button>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not an admin?
          <button
            onClick={() => navigate('/registration')}
            className="font-semibold leading-6 text-[#02457A] hover:text-[#001B48]"
          >
            Register here
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
