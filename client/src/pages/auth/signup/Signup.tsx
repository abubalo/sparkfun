import SignupForm from "@components/user/signupForm/SignupForm";
import AuthRedirect from "@utils/auth/AuthRedirect";

const Signup = AuthRedirect(() => {
  return <SignupForm />;
});

export default Signup;
