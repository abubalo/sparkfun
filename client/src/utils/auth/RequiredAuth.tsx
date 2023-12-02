import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "@components/shared/ui/LoadingIndicator";
import useAuth from "@utils/hooks/useAuth";

const RequiredAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { user, isLoading, error } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const handleAuthentication = () => {
        if(isLoading){
          return <LoadingIndicator />
        }
        if (user === null) {
          // Delayed redirect if user data is still null after a certain time (e.g., 1 second)
          const timeout = setTimeout(() => {
            navigate('/login');
          }, 1000); // Adjust this time as needed

          return () => clearTimeout(timeout); // Clear timeout if user data is received before the delay
        
        }
      };

      handleAuthentication();
    }, [user, isLoading, navigate, error]);

    return (
      <>{isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />}</>
    );
  };
};

export default RequiredAuth;
