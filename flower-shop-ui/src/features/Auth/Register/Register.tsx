import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>email</div>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <div>name</div>
        <input {...register("name", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <div>password</div>
        <input {...register("password", { required: true })} type="password" />
        {errors.password && <span>This field is required</span>}
      </div>

      <input type="submit" />
    </form>
  );
};

export default Register;
