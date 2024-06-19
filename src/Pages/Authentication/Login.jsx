import { Link, useLocation, useNavigate } from "react-router-dom";

import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const { user, login } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  console.log(location);
  const token = localStorage.getItem("token");

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await login(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };

        axios
          .post("http://localhost:3000/users", userInfo, {
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            const user = response.data;
            localStorage.setItem("token", user?.token);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              <SocialLogin></SocialLogin>
              <div className="mt-6">
                <p>
                  New here?{" "}
                  <Link to="/register" className="text-red-500">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
