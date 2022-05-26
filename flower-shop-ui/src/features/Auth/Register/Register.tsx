import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="content">
      <div className="register-text">Registruokitės</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <input
            className="input"
            placeholder="El. pašto adresas"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          {errors.email && (
            <span className="error">El. paštas yra privalomas</span>
          )}
        </div>
        <div>
          <input
            className="input"
            placeholder="Slaptažodis"
            {...register("password", { required: true })}
            type="password"
          />
        </div>
        <div>
          {errors.password && (
            <span className="error">Slaptažodis yra privalomas</span>
          )}
        </div>
        <div>
          <input className="submit" type="submit" value="Registruotis" />
        </div>
      </form>
    </div>
  );
};

export default Register;
