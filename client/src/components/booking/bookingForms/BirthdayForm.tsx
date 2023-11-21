// import { ErrorMessage, Field, Form } from "formik";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Calendar, CloudArrow } from "../../shared/icons/Icons";
import Button from "../../shared/ui/button/Button";

const BirthdayForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const occation = searchParams.get("occation");

  const [isActive, setIsActive] = useState(false);

  const handleRadioChange = () => {
    setIsActive(!isActive);
  };

  const takeToCheckout = () => {
    // navigate("checkout", { state: { data: {} } });
    navigate("checkout", { state: { data: {} } });
  };

  console.log(occation);
  return (
    <>
      <form action="" className=" w-full space-y-8">
        <div className="space-y-6 mt-10">
          <h1 className="text-xl font-semibold ">Step 2: Who's is this for?</h1>
         

          <div className="space-y-4">
            <div>
              <label
                htmlFor="wisher-firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Celebrant name:
              </label>
              <input
                type="text"
                name="wisher-firstname"
                id="wisher-firstname"
                //   value={values.tofirstname}
                //   onChange={handleChange}
                //   onBlur={handleBlur}

                autoComplete={"current-tofirstname"}
                className="w-full block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  p-4 dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-700  dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500"
                placeholder="Alicia"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-max bg-foreground px-4 py-2 rounded-full border dark:border-gray-600 active:bg-primary">
                <label htmlFor="he">He/Him</label>
                <input
                  hidden
                  type="radio"
                  name="he"
                  id="pronoun"
                  value="he/him"
                />
              </div>
              <div className="w-max bg-foreground px-4 py-2 rounded-full border dark:border-gray-600 active:bg-primary">
                <label htmlFor="she">She/Her</label>
                <input
                  hidden
                  type="radio"
                  name="pronoun"
                  id="she"
                  value="she/her"
                />
              </div>
              <div className="w-max bg-foreground px-4 py-2 rounded-full border dark:border-gray-600 active:bg-primary">
                <label htmlFor="them">They/Them</label>
                <input
                  hidden
                  type="radio"
                  name="pronoun"
                  id="them"
                  value="they/them"
                />
              </div>
            </div>
            {/* <ErrorMessage
              name="celebrant.firstname"
              component="div"
              className="text-red-700"
            /> */}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Step 2: Request Details</h1>
          <div>
            <label
              htmlFor="birthdate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              When is their birthday? (Optional)
            </label>
            <div className="w-full flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-700  dark:text-white ">
              <input
                type="text"
                name="birthdate"
                id="birthdate"
                placeholder="DD/MM"
                //   value={values.tofirstname}
                //   onChange={handleChange}
                //   onBlur={handleBlur}

                autoComplete={"current-tofirstname"}
                className="w-full bg-transparent p-4 dark:focus:ring-blue-400 dark:focus:border-blue-500"
              />
              <span className="text-textColor p-4">
                <Calendar />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How Old Are they Turning? (optional)
            </label>
            <input
              type="number"
              name="age"
              id="age"
              min={1}
              placeholder="21"
              //   value={values.tofirstname}
              //   onChange={handleChange}
              //   onBlur={handleBlur}

              autoComplete={"current-tofirstname"}
              className="w-full block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  p-4 dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-700  dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="activities"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              What are they doing on their birthday?
            </label>

            <textarea
              name="activities"
              id="activities"
              rows={5}
              placeholder="We're hosting a game night at John's place with a bunch of his closest friends"
              //   value={values.tofirstname}
              //   onChange={handleChange}
              //   onBlur={handleBlur}

              autoComplete={"current-tofirstname"}
              className="w-full block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  p-4 resize-none dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-700  dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center p-4 bg-foreground rounded-lg">
            <div>
              <h1 className="text-lg font-semibold">
                Photo or video (optional)
              </h1>
              <p className="text-textColor">Attach a file to your request</p>
            </div>

            <div
              id="uploadFile"
              className="bg-slate-800 flex justify-between gap-2  items-center px-8 py-4 cursor-pointer rounded-full "
            >
              <div>
                <CloudArrow />
              </div>
              <label htmlFor="uploadFile" className={""}>
                Upload
              </label>
            </div>
            <input type="file" hidden={true} id="uploadFile" />
          </div>
        </div>
        <Button
          type="submit"
          onClick={takeToCheckout}
          className="w-full p-4 rounded-full "
        >
          Continue
        </Button>
      </form>
    </>
  );
};

export default BirthdayForm;
