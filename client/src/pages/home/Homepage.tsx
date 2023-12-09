import Catalog from "@components/homepage/Catalog";
import LinkButton from "@components/shared/ui/button/LinkButton";
import VerifyAcccount from "@pages/auth/accountVerification/VerifyAcccount";
import UserDropdownMenu from "@components/shared/ui/dropdown/UserDropdownMenu";
import { useState } from "react";
// import SelectMenu from "@components/shared/ui/selectMenu/SelectMenu";
import Modal from "@components/shared/ui/modal/Modal";
import Button from "@components/shared/ui/button/Button";
import NotificationModal from "@components/notifications/NotificationModal";
import LoadingIndicator from "@components/shared/ui/LoadingIndicator";
import { BellIcon } from "@components/shared/icons/Icons";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(!open);
  }

  // const options = [
  //   { value: "option1", label: "Option 1" },
  //   { value: "option2", label: "Option 2" },
  //   { value: "option3", label: "Option 3" },
  // ];

  return (
    <main className=" text-white">
      <section
        id="homepage"
        className="container mx-auto h-[83vh] flex flex-col justify-center items-center "
      >
        <div className="flex flex-col justify-center items-center space-y-4 ">
          <span className="p-2 px-4 rounded-full bg-foreground bg-opacity-40">
            best website in the world
          </span>
          <h1 className="w-full text-4xl font-semibold text-center md:leading-[1.3]  md:w-4/5 md:text-6xl">
            Get bespoke video from your favourite Celeb
          </h1>
          <p className="w-full text-semibold text-lg text-center md:w-4/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            saepe, eos similique iure quasi laudantium exercitationem ipsam
            incidunt aliquid quod hic eaque perspiciatis asperiores quis
            eligendi animi minus et explicabo.
          </p>
          <LinkButton href="/signup" className="rounded-md">
            Book a Video
          </LinkButton>
        </div>
      </section>

      <section>
        <Catalog />
      </section>

      <section className="container mx-auto h-screen">
        <UserDropdownMenu />
        <Modal onClose={closeModal} isOpen={open} className="w-64">
          <span className="text-3xl">
            <BellIcon />
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolorum neque unde error veritatis nam, velit illum
            aperiam modi itaque corrupti? Nihil quis totam architecto
            praesentium sequi magni suscipit facilis.
          </p>
        </Modal>
      </section>

      <section id="testimony" className="container mx-auto h-screen text-white">
        <Button type="button" onClick={() => setOpen(!open)}>
          Modal
        </Button>
        <LoadingIndicator type="loading"/>
        <NotificationModal />
        <VerifyAcccount />
      </section>
    </main>
  );
};

export default HomePage;
