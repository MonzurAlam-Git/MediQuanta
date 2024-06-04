import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Components/Shared/AuthProvider";
import { auth } from "../../../firebase.config";
import useAuth from "../../Hooks/useAuth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  // const { demoData } = useContext(AuthContext);
  const { demoData } = useAuth();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(demoData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    console.log("user Created Successfully", data);
  };

  return (
    <div className="max-w-screen">
      <div className="min-h-screen bg-base-200">
        <div className="grid my-5 lg:flex flex-row-reverse justify-items-center content-center">
          <img
            className="w-56 h-auto lg:h-screen lg:w-3/6 p-10 bg-emerald-300"
            src="https://i.ibb.co/0DcnJ0B/Mobile-login-1.gif"
            alt=""
          />

          {/* form part */}
          <div className="flex-shrink-0  shadow-2xl bg-base-100 p-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className=" font-bold text-4xl text-center text-emerald-500 hover:text-5xl">
                R E G I S T E R
              </h1>
              <div className="grid justify-center items-center gap-1 mt-10">
                {/* Name field  */}

                <label> Name</label>
                <div className="flex gap-5 w-full">
                  <input
                    autoComplete="on"
                    type="text"
                    placeholder="First Name"
                    className="input input-success input-bordered w-3/5   "
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "Please provide Name ",
                      },
                    })}
                  />
                  <input
                    autoComplete="on"
                    type="text"
                    placeholder="Last Name"
                    className="input input-success input-bordered w-2/5 max-w-xs"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Please provide Name ",
                      },
                    })}
                  />
                </div>
                {/* Name Field error  */}
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.name.message}
                    </span>
                  )}
                  {/* {errors.email?.type === 'pattern' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>
                          } */}
                </label>

                {/* email field  */}
                <label> Email</label>
                <input
                  autoComplete="on"
                  type="text"
                  placeholder="Type Your Email"
                  className="input input-success input-bordered lg:w-full max-w-screen"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please provide Email correctly ",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]/i,
                      message: "Please provide Email correctly ",
                    },
                  })}
                />
                {/* email error  */}
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.email.message}
                    </span>
                  )}
                </label>

                {/* passsword field  */}
                <label> Password</label>
                <input
                  autoComplete="on"
                  {...register(
                    "password",

                    {
                      required: {
                        value: true,
                        message: "Please provide password correctly ",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    }
                  )}
                  type="password"
                  placeholder="Type Your Password"
                  className="input input-success input-bordered w-full "
                />

                {/* password error  */}
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                {/* passsword field  */}
                <label> Confirm Password</label>
                <input
                  autoComplete="on"
                  {...register(
                    "password",

                    {
                      required: {
                        value: true,
                        message: "Please provide password correctly ",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    }
                  )}
                  type="password"
                  placeholder="Type Your Password"
                  className="input input-success input-bordered w-full "
                />

                {/* password error  */}
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 font-bold ml-8">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <p className="m-2 font-bold">
                  {" "}
                  Already Have An Account ?
                  <Link
                    className="my-1 text-cyan-600 underline font-bold"
                    to="/login"
                  >
                    {" "}
                    Login Here
                  </Link>{" "}
                </p>

                <input
                  className="btn bg-emerald-500 hover:bg-emerald-700 text-white font-bold mx-auto w-80 "
                  type="submit"
                  value="R e g i s t e r"
                />
              </div>
            </form>
            {/* Social Login  */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
