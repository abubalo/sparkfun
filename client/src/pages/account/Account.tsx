import { useState } from "react";
import RequiredAuth from "@/utils/auth/RequiredAuth";
import TalentAccount from "@/components/talent/TalentAccount";
import UserAccount from "@/components/user/userAccount/UserAccount";

const Account = () => {
  const [role] = useState("talent");
  return (
    <main className="">
      {role === "user" ? <UserAccount /> : <TalentAccount />}
    </main>
  );
};

export default RequiredAuth(Account);
