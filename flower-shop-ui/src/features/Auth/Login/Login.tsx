import { useAuth } from "context/auth/AuthContext";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      login(data);
      navigate("/");
    } catch (e) {
      alert("failed to login");
    }
  };

  return (
    <div className="content">
      <div className="login-text">Prisijunkite</div>
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
          <input className="submit" type="submit" value="Prisijungti" />
        </div>
      </form>
      <div className="register-link">
        <div className="register-label">Neturite paskyros?</div>
        <button
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Registruokitės
        </button>
      </div>
    </div>
  );
};

export default Login;
