import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { auth } from "../../../firebase.config";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Components/Shared/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  console.log("Token From SL =>", token);

  const handleGoogle = () => {
    googleLogin().then((data) => {
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

  const handleGithub = () => {
    githubLogin.then((res) => {
      if (res?.user?.email) {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        fetch(" http://localhost:3000/users", {
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

// const handleGoogle = async () => {
//   await googleLogin().then((res) => {
//     if (res?.user?.email) {
//       const userData = {
//         email: res?.user?.email,
//         name: res?.user?.displayName,
//       };

//       fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           // localStorage.setItem("token", data?.token);
//           console.log(data);
//         });
//       // const response = axios.post("http://localhost:3000/users", userData, {
//       //   headers: {
//       //     authorization: `Bearer ${token}`,
//       //     "Content-Type": "application/json", // Ensure content type is JSON
//       //   },
//       // });
//       // localStorage.setItem("authToken", response.data.token);
//     }
//   });
// };
// .then((res) => localStorage.setItem("token", res.data.token));

// Copied Google Functionality
// const { googleLogin } = useAuth();

export default SocialLogin;
