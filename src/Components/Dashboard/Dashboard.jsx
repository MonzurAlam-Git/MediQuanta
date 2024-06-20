import Dashboard_App from "./DashboardArea/Dashboard_App";
import ExpeimentalDashboard from "./DashboardArea/ExpeimentalDashboard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Dashboard</h1>
      {/* <Dashboard_App /> */}
      <ExpeimentalDashboard></ExpeimentalDashboard>
    </div>
  );
};

export default Dashboard;
