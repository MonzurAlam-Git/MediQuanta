import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../firebase.config";

const SocialLogin = () => {
  //   const [signInWithGoogle, user_google, loading_google, error_google] =
  //     useSignInWithGoogle(auth);
  //   const [signInWithGithub, user_github, loading_github, error_github] =
  //     useSignInWithGithub(auth);

  const provider = new GoogleAuthProvider();

  return (
    <div>
      <div className="divider w-96 mx-auto font-bold">OR</div>
      {/* Google Sign In  */}
      <div className="grid items-center justify-center gap-2">
        <button
          onClick={() => signInWithPopup(auth, provider)}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FcGoogle className="w-10 h-6"></FcGoogle> Google Sign In
        </button>
        {/* Github Login  */}
        <button
          onClick={() => signInWithGithub()}
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
