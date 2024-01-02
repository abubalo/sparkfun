import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@components/shared/ui/button/Button";
import LoadingIndicator from "@components/shared/ui/LoadingIndicator";
import useAuth from "@utils/hooks/useAuth";
import useLoginUser from "@utils/hooks/useLoginUser";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<unknown | string>("");

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const { mutate, isLoading, isError } = useLoginUser(
    {
      onSuccess: (data) => {
        setUser(data);
        navigate("/dashboard");
      },
      onError: (error) => {
        setErrorMessage(error);
      }
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

  return (
    <section className="h-screen w-ful ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src=""
            alt="logo"
            width={100}
            height={100}
          />
          Sparkfun
        </Link>
        <div className="w-full border rounded-lg bg-foreground border-gray-500/50 md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Formik
              onSubmit={(values) => handleSubmit(values)}
              initialValues={initialValues}
              validationSchema={schema}
            >
              {({ values, handleChange, handleBlur }) => {
                return (
                  <Form className="space-y-4 w-ful md:space-y-3">
                    <div>{isError ? <>{errorMessage}</> : null}</div>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-500"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <Link
                        to="/reset"
                        className="text-sm font-medium text-gray-400 hover:underline "
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {isLoading ? <LoadingIndicator /> : "Sign in"}
                    </Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </Link>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
