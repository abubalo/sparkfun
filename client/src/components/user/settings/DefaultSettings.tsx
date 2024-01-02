import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { motion } from "framer-motion";
import Button from "@components/shared/ui/button/Button";
import { loginUser, LoginData } from "@utils/queries/userQueries";
import LoadingIndicator from "@components/shared/ui/LoadingIndicator";
import useAuth from "@utils/hooks/useAuth";

const DefaultSettings = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { setUser } = useAuth();

  const { mutate, isLoading, isError } = useMutation(
    "loginUser",
    (data: LoginData) => loginUser(data),
    {
      onSuccess: (data) => {
        setUser(data);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        setErrorMessage(error.message);
      },
    }
  );

  const handleSubmit = async (formData: typeof initialValues) => {
    // Call the API using the mutation function
    mutate(formData);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Animation
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className="w-full basis-4/5 "
      initial="hidden"
      animate="visible"
      variants={fadeAnimation}
      exit={"hidden"}
    >
      <div className="w-full border rounded-lg border-gray-500/50 md:mt-0 xl:p-0 ">
        <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <Formik
            onSubmit={(values) => handleSubmit(values)}
            initialValues={initialValues}
            validationSchema={schema}
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form className="w-full space-y-4 md:space-y-8 ">
                  <div className={`${isError ? "block" : "invisible"}`}>
                    {errorMessage}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete={"current-email"}
                      className="w-full block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-700"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-700"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="w-max  text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {isLoading ? <LoadingIndicator /> : "Submit"}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </motion.section>
  );
};

export default DefaultSettings;
