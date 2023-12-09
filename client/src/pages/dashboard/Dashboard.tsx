import TalentDasboard from "@components/talent/TalentDashboard";
import UserDashboard from "@components/user/userDashboard/UserDashboard";
import RequiredAuth from "@utils/auth/RequiredAuth";
import useAuth from "@utils/hooks/useAuth";

const Dashboard = RequiredAuth(() => {
  const { user } = useAuth();

  return (
    <div className="h-screen">
      {user?.role === "talent" ? <TalentDasboard /> : <UserDashboard />}
    </div>
  );
});

export default Dashboard;
