import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import LoadingIndicator from "../../src/components/shared/ui/LoadingIndicator";
import { JSX } from "react/jsx-runtime";

const RequiredAuth = (WrappedComponent: React.ComponentType<JSX.Element>) => {
  return function WithAuth() {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const handleAuthentication = useCallback(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user, navigate]);

    useEffect(() => {
      handleAuthentication();
    }, [handleAuthentication]);

    return loading ? (
      <LoadingIndicator />
    ) : (
      <WrappedComponent key={null} type={undefined} props={undefined} />
    );
  };
};

export default RequiredAuth;
