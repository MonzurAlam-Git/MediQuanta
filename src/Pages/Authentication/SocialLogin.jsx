import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../firebase.config";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  return (
    <div>
      <div className="divider w-96 mx-auto font-bold">OR</div>
      {/* Google Sign In  */}
      <div className="grid items-center justify-center gap-2">
        <button
          onClick={() => googleLogin}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FcGoogle className="w-10 h-6"></FcGoogle> Google Sign In
        </button>
        {/* Github Login  */}
        <button
          onClick={() => githubLogin}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          {" "}
          <FaGithub className="w-10 h-6"></FaGithub>GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
