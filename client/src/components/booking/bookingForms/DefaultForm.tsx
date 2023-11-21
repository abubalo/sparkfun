import { ErrorMessage, Form, Formik } from "formik";
import { object, string } from "yup";
import { CloudArrow } from "../../shared/icons/Icons";
import Button from "../../shared/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/hooks/AuthProvider";
import { useAppState } from "@/utils/hooks/AppContext";

const DefaultForm = () => {
  const { dispatch } = useAppState();
  const { user } = useAuth();
  const userId = user?.id as string;

  const navigate = useNavigate();

  const initialValues = {
    user: userId,
    gigId: "gigId",
    celebrant: "",
    celebrant_age: "",
    occation: "birthday",
    plan: "default",
    message: "",
    attatchment: "",
    booking_date: new Date().toISOString(),
  };

  const schema = object({
    celebrant: string().required("Please fill the Input"),
  });

  const handleSubmit = (data: typeof initialValues) => {
    try {
      dispatch({ type: "ADD_BOOKING", payload: data });
      navigate("checkout", { state: data });
    } catch (error) {
      console.log("Error from booking form: ", error);
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {({ values, handleChange, handleBlur }) => {
        return (
          <Form action="" className=" w-full space-y-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="celebrant"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    Celebrant name
                  </label>
                  <input
                    type="text"
                    name="celebrant"
                    id="celebrant"
                    value={values.celebrant}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Lilla"
                    autoComplete={""}
                    className="w-full block bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg  p-4 dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="celebrant"
                    component="div"
                    className="text-sm text-semibold text-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    How Old Are they Turning? (optional)
                  </label>
                  <input
                    type="text"
                    name="celebrant_age"
                    id="age"
                    min={1}
                    placeholder="21"
                    value={values.celebrant_age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete={"current-tofirstname"}
                    className="w-full block bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg  p-4 dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    Do want me want me to say something at the of the video?
                    (Optional)
                  </label>

                  <textarea
                    name="message"
                    id="age"
                    rows={5}
                    placeholder="This video is from your boyfirend Jack, He loves so much and wishes you happy birthday from the bottom of his heart"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete={"current-tofirstname"}
                    className="w-full block bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg  p-4 resize-none dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-between items-center p-4 bg-foreground rounded-lg">
                  <div>
                    <h1 className="text-lg font-semibold">
                      Additonal Document to aid in pronounciation or others
                      (optional)
                    </h1>
                    <p className="text-textColor">
                      Attach a file to your request
                    </p>
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
                  <input
                    type="file"
                    hidden={true}
                    id="uploadFile"
                    onChange={handleChange}
                    value={values.attatchment}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full p-4 rounded-full ">
              Continue
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DefaultForm;
