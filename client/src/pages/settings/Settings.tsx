import RenderSettingsForm from "@/components/user/settings/RenderSettingsForm";
import SettingsPanel from "@/components/user/settings/SettingsPanel";
import UpdateProfilePic from "@/components/user/settings/UpdateAvatarSettings";

const Settings = () => {
  return (
    <main className="w-4/5 mx-auto h-screen  ">
      <div className="w-full space-y-10">
        <SettingsPanel />
        <UpdateProfilePic />
        <RenderSettingsForm />
      </div>
    </main>
  );
};

export default Settings;
