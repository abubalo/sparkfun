import { useAuth } from "@/utils/hooks/AuthProvider";
import TalentDasboard from "@/components/talent/TalentDashboard";
import UserDashboard from "@/components/user/userDashboard/UserDashboard";
import RequiredAuth from "@/utils/auth/RequiredAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen">
      {user?.role === "talent" ? <TalentDasboard /> : <UserDashboard />}
    </div>
  );
};

export default RequiredAuth(Dashboard);
