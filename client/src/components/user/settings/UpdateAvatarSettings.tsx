import { DeleteIcon } from "@components/shared/icons/Icons";
import Button from "@components/shared/ui/button/Button";
import FileUploadInput from "@components/shared/UploadInput/FileUploadInput";
import ProfilePicture from "../profilePicture/ProfilePicture";

const UpdateAvatar = () => {
  return (
    <div className="flex gap-8 items-center">
      <ProfilePicture />
      <div className="flex gap-3">
        <FileUploadInput className="bg-transparent border">Update Avatar</FileUploadInput>
        <Button
          type="button"
          className="flex gap-1 items-center border border-red-600 bg-transparent rounded-full hover:bg-red-700"
        >
          <DeleteIcon /> Delete Avatar
        </Button>
      </div>
    </div>
  );
};

export default UpdateAvatar;
