import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "@/components/shared/ui/LoadingIndicator";
import { useAuth } from "../hooks/AuthProvider";

const AuthRedirect = <T = unknown>(WrappedComponent: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const handleAuthentication = () => {
        if (!isLoading && user) {
          console.log("Navigated!")
          navigate("/dashboard");
        }
      };
      handleAuthentication();
    }, [user, navigate, isLoading]);

    return isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />;
  };
};

export default AuthRedirect;
