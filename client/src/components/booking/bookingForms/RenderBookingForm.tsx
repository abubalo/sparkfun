import { useSearchParams } from "react-router-dom";
import AdviceForm from "./AdviceForm";
import BirthdayForm from "./BirthdayForm";
import OtherForm from "./OtherForm";
import PepTalkForm from "./PepTalkForm";
import QuestionForm from "./QuestionForm";
import RoastForm from "./RoastForm";
import DefaultForm from "./DefaultForm";

const RenderDefaultForm = () => {
  const [searchParams] = useSearchParams();
  const occation = searchParams.get("occation") as string;
  

  const formType: { [key: string]: JSX.Element } = {
    birthday: <BirthdayForm />,
    roast: <RoastForm />,
    advice: <AdviceForm />,
    question: <QuestionForm />,
    peptalk: <PepTalkForm />,
    other: <OtherForm />,
    default: <DefaultForm />,
  };

  const formToRender = formType[occation] || <DefaultForm />;

  // const options = [
  //   { value: "birthday", label: "Birthday", icon: <Gift /> },
  //   { value: "roast", label: "Roast", icon: <Fire /> },
  //   { value: "academic", label: "Academic", icon: <Academic /> },
  //   { value: "pep-talk", label: "Pep Talk", icon: <Rocket /> },
  //   { value: "questions", label: "Questions", icon: <QuestionMark /> },
  //   { value: "others", label: "Others", icon: <Star /> },
  // ];

  return (
    <section className="mb-10 basis-4/5" style={{ scrollbarGutter: "stable" }}>
      {formToRender}
    </section>
  );
};

export default RenderDefaultForm;
