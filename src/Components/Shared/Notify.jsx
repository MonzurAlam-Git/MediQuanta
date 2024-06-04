import { toast } from "react-toastify";

const Notify = ({ text }) => {
  const string = text;
  const notify = () => {
    toast.success(string, {
      position: "top-center",
    });
  };
  return notify;
};

export default Notify;
