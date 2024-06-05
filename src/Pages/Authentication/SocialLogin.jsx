import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../firebase.config";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const handleGoogle = () => {
    googleLogin().then((res) => {
      if (res?.user?.email) {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        fetch(" https://mediquanta-server-1.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }
    });
  };

  const handleGithub = () => {
    githubLogin.then((res) => {
      if (res?.user?.email) {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        fetch(" https://mediquanta-server-1.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }
    });
  };

  return (
    <div>
      <div className="divider w-96 mx-auto font-bold">OR</div>
      {/* Google Sign In  */}
      <div className="grid items-center justify-center gap-2">
        <button
          onClick={handleGoogle}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FcGoogle className="w-10 h-6"></FcGoogle> Google Sign In
        </button>
        {/* Github Login  */}
        <button
          onClick={handleGithub}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FaGithub className="w-10 h-6"></FaGithub>GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
