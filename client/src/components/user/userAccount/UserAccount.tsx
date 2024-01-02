import LinkButton from "@components/shared/ui/button/LinkButton";
import ProfilePicture from "../profilePicture/ProfilePicture";

const UserAccount = () => {
  return (
    <main className="container mx-auto h-screen  space-y-10 bg-green-500/10">
      <div className="flex gap-6 justify-center items-center">
        <ProfilePicture />
        <div>
          <div>
            <h2 className="text-lg font-bold">Alica Mayor</h2>
            <p>Lagos</p>
          </div>
          <LinkButton href="">Become Talent</LinkButton>
        </div>
      </div>
      <div className="h-full border-t flex justify-center items-center">
        <h2 className="text-3x font-bold"> Nothing to Show</h2>
      </div>
    </main>
  );
};

export default UserAccount;
