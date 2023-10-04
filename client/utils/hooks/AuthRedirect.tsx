import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../src/components/shared/ui/LoadingIndicator";
import { AuthContextValue, useAuth } from "../contexts/AuthProvider";

const AuthRedirect = <T extends AuthContextValue>(
  WrappedComponent: React.ComponentType<T>
) => {
  return function WithAuth(props: T) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const handleAuthentication = useCallback(() => {
      if (user) {
        navigate("/dashboard");
      }
    }, [user, navigate]);

    useEffect(() => {
      handleAuthentication();
    }, [handleAuthentication]);

    return loading ? <LoadingIndicator /> : <WrappedComponent {...props} />;
  };
};

export default AuthRedirect;
