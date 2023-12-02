import { ErrorMessage, Form, Formik } from "formik";
import { object, string } from "yup";
import { CloudArrow } from "../../shared/icons/Icons";
import Button from "../../shared/ui/button/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "@utils/hooks/useAuth";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@utils/redux/store/configureStore";
import { addBooking } from "@utils/redux/actions/bookingAction";

const DefaultForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const { gigId } = useAppSelector((state) => state.getGigId);
  const booking = useAppSelector(state => state.booking)
  const userId = user?.id;

  if (!userId) {
    return ;
  }


  const initialValues = {
    user: userId,
    gigId,
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
      dispatch(addBooking(data));
      console.log("booking Data: ", booking);
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
          <Form action="" className="w-full space-y-8 ">
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
                    className="block w-full p-4 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="celebrant"
                    component="div"
                    className="text-sm text-red-500 text-semibold"
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
                    className="block w-full p-4 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="block w-full p-4 text-gray-500 border border-gray-300 rounded-lg resize-none bg-gray-50 sm:text-sm dark:bg-foreground dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-foreground">
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
                    className="flex items-center justify-between gap-2 px-8 py-4 rounded-full cursor-pointer bg-slate-800 "
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
