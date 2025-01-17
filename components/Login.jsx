"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { AiFillCar } from "react-icons/ai";
import toast from "react-hot-toast";
import Link from "next/link";

const loginApi = "https://explora-cars.onrender.com/login";

export default function useLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch(loginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.status === 302) {
        const data = await response.json();
        if (typeof window !== "undefined") {
          sessionStorage.setItem("user", JSON.stringify(data));
        }
        navigate.push("/");
        toast.success("login successful!");
      } else if (response.status === 401) {
        const error = await response.json();
        setLoginAttempt(loginAttempt + 1);
        setErrors(error.errors);
      } else {
        setErrors("Too many attempts, try again later");
      }
    } catch (error) {
      console.error(error);
      setErrors("An error occurred while processing your request");
    }
  }

  return (
    <div className="h-screen">
      <div className="">
        <h1 className="text-2xl m-5 text-center md:text-left md:text-3xl font-bold lg:text-4xl cursor-pointer flex items-center underline decoration-amber-400 decoration-4">
          <AiFillCar />
          Explora
        </h1>
      </div>
      <div className="login-page">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Welcome Back
        </h1>
        <form className="p-4 m-3" onSubmit={handleLogin}>
          <div className="relative">
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Type your email"
              className="input-field  focus:bg-blue-600"
              required
            />
            <MdEmail id="email-icon" />
          </div>
          <div className="relative">
            <label htmlFor="password">Password :</label>
            <br></br>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Type your password"
              minLength={8}
              required
              className="input-field focus:bg-blue-600"
            />
            <FaLock id="password-icon" />
          </div>
          <input
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <span> {!showPassword ? "Show" : "Hide"} Password</span>
          <p className="pt-3">
            Forgot Password?{" "}
            <Link href="/reset" className="login__link">
              {" "}
              Click here
            </Link>
          </p>
          <button
            type="submit"
            className="login-button"
            disabled={loginAttempt >= 4}>
            <SlLogin /> Login
          </button>
          <Link href="/signup" className="flex flex-col gap-1">
            <span>Not a member yet?</span>
            <p className="login__link">Register Here</p>
          </Link>
        </form>
        <div className={errors ? "bg-red-400 mt-3 p-2 rounded-sm" : "hidden"}>
          {errors ? errors : ""}
        </div>
      </div>
    </div>
  );
}
