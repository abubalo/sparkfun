import LoginForm from "@components/user/loginForm/LoginForm";
import AuthRedirect from "@utils/auth/AuthRedirect";

const Login = AuthRedirect(() => {
  return <LoginForm />;
});

export default Login;
