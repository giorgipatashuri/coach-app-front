"use client";
import Field from "@/components/input/Field"; // Adjust import paths as needed
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/button/Button";

const Auth: FC = () => {
  const [type, setType] = useState<"login" | "register">("register");

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({ mode: "onChange" });

  //   const onSubmit: SubmitHandler<any> = (data) => {
  //     if (type === "login") login(data);
  //     else register(data);
  //     reset();
  //   };

  return (
    <section className="flex h-screen">
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className=" w-[500px] rounded-lg bg-white shadow-sm p-8 m-auto"
      >
        <h1 className="capitalize text-center mb-4">
          {type == "login" ? "შესვლა" : "რეგისტრაცია"}
        </h1>
        <Field
          {...formRegister("email", {
            required: "ელ-ფოსტა აუცილებელია",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "არასწორი ელ-ფოსტა",
            },
          })}
          text="ელ-ფოსტა"
          placeholder="ელ-ფოსტა"
          error={errors.email?.message as string}
        />
        <Field
          {...formRegister("password", {
            required: "პაროლი აუცილებელია",
            minLength: {
              value: 6,
              message: "პაროლის სიგრძე უნდა იყოს 6 სიმბოლოზე მეტი",
            },
          })}
          type="password"
          text="პაროლი"
          placeholder="პაროლი"
          error={errors.password?.message as string}
        />
        {type === "register" && (
          <div className="mb-16">
            <label className="block text-sm font-medium text-gray-700">
              როლი
            </label>
            <select
              {...formRegister("role")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-[60px] outline-none sm:text-sm"
            >
              <option value="player">ფეხბურთელი</option>
              <option value="coach">მწვრთნელი</option>
            </select>
          </div>
        )}
        <div className="flex justify-center items-center gap-1">
          <button className=" w-[170px] h-[40px] font-medium text-white bold rounded text-center bg-teal-500">
            რეგისტრაცია
          </button>
          <button
            type="button"
            className="inline-block opacity-50 ml-3 capitalize"
            onClick={() => setType(type === "login" ? "register" : "login")}
          >
            {type === "login" ? "არ მაქვს ექაუნთი" : "შესვლა"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
