/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "@components/shared/ui/LoadingIndicator";
import useAuth from "@utils/hooks/useAuth";


const AuthRedirect = <P extends object>(WrappedComponent: ComponentType) => {
  const WithAuth = (props: P) => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const handleAuthentication = () => {
        if (user !== null) {
          // Delayed redirect if user data is still null after a certain time (e.g., 1 second)
          const timeout = setTimeout(() => {
            navigate("/dashboard");
          }, 1000); // Adjust this time as needed

          return () => clearTimeout(timeout); // Clear timeout if user data is received before the delay
        }
      };
      handleAuthentication();
    }, [user, navigate, isLoading]);

    return (
      <>{isLoading ? <LoadingIndicator /> : null}</>
    );
  };

  return WithAuth;
};

export default AuthRedirect;
