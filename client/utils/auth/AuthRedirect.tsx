import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../src/components/ui/LoadingIndicator";
import { AuthContextValue, useAuth } from "../hooks/AuthProvider";

const AuthRedirect = <T extends AuthContextValue>(
  WrappedComponent: React.ComponentType<T>
) => {
  return function WithAuth(props: T) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/dashboard");
      }
    }, [user, navigate]);

    return loading ? <LoadingIndicator /> : <WrappedComponent {...props} />;
  };
};

export default AuthRedirect;
