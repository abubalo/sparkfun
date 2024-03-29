import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@utils/hooks/useAuth";


const AuthRedirect = <P extends object>(WrappedComponent: ComponentType) => {
  const WithAuth = (props: P) => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const handleAuthentication = () => {
        if (user) {
          // Delayed redirect if user data is still null after a certain time (e.g., 1 second)
          const timeout = setTimeout(() => {
            return navigate("/dashboard");
          }, 1000); 

          return () => clearTimeout(timeout); // Clear timeout if user data is received before the delay
        }
      };
      handleAuthentication();
    }, [user, navigate, isLoading]);

    return (
      <div className="h-screen"><WrappedComponent {...props}/></div>
    );
  };

  return WithAuth;
};

export default AuthRedirect;
