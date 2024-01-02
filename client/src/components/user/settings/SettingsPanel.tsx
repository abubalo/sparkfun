import { Link, useSearchParams } from "react-router-dom";
import Button from "@components/shared/ui/button/Button";

const SettingsPanel = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") as string;
  const setTab = searchParams.set("tab", "Hello");
  console.log(setTab);

  const queries: {[key: string]: string} = {
    default: "/profile/settings",
    password: "?tab=password ",
    billing: "?tab=billing ",
    email: "?tab=notification ",
    integration: " ?tab=integration",
  };

  const activeTab = queries[tab] ?? "default";

  return (
    <aside className="basis-1/4  ">
      <div className="hidden text-white p-4 justify-stretch items-center gap-6 border-b border-slate-700 md:flex  ">
        <Link to="/profile/settings" className={`py-2 `}>
          Edit Profile
        </Link>
        <Link to="?tab=password" className={`py-2 `}>
          Change Password
        </Link>
        <Link to="?tab=billing" className={`py-2 `}>
          Billing Address
        </Link>
        <Link to="?tab=notification" className={`py-2 `}>
          Notifications
        </Link>
        <Link to="?tab=integration" className={`py-2 `}>
          Integration
        </Link>
        <Button
          type="submit"
          onClick={() => confirm("Are you sure want to delete your account?")}
          className="w-max border-2 border-red-700 bg-transparent hover:bg-red-700"
        >
          Delete Account
        </Button>
      </div>
      {/* Mobile view */}
      {/* Todo Implement select menu Component */}
    </aside>
  );
};

export default SettingsPanel;
