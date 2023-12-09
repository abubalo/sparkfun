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
        if (user === null) {
          // Redirect to login if user data is still null, loading has finished, and there are no errors
          const timeout = setTimeout(() => {
            navigate('/login');
          }, 1000);
    
          return () => clearTimeout(timeout); // Clear timeout if user data is received before the delay
        }
      };
    
      return handleAuthentication();
    }, [user, isLoading, navigate, error]);
    

    return (
      <div className="h-screen">{isLoading ? <LoadingIndicator /> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default RequiredAuth;
