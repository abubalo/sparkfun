import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import LoadingIndicator from "@/components/shared/ui/LoadingIndicator";

const RequiredAuth = <T = unknown,>(WrappedComponent: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const handleAuthentication = () => {
        if (isLoading) {
          return;
        } else if (!user) {
          return navigate("/login");
        }
      };

      handleAuthentication();
    }, [user, isLoading, navigate]);

    return (
      <>{isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />}</>
    );
  };
};

export default RequiredAuth;
