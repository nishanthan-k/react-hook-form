import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const form = useForm();
  const { register, handleSubmit, control, formState } = form;
  const {errors} = formState;

  const submitHandler = (data) => {
    const jsonData = JSON.stringify(data);
    window.alert(jsonData);
  };

  return (
    <div className="bg-slate-500 w-screen h-screen flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
        className="bg-slate-600 min-w-96 md:w-1/3 h-max px-5 py-4 mt-16 rounded-xl flex flex-col gap-2"
      >
        <div className="flex flex-col justify-between mb-3 gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="h-7 rounded px-1 "
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          <p className="text-red-600 font-bold text-lg">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col justify-between mb-3 gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="h-7 rounded px-1 "
            type="text"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="text-red-600 font-bold text-lg">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col justify-between mb-3 gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="h-7 rounded px-1 "
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          <p className="text-red-600 font-bold text-lg">{errors.password?.message}</p>
        </div>
        <button className="bg-gray-300 self-center px-5 py-1 rounded-lg">
          Submit
        </button>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default App;
