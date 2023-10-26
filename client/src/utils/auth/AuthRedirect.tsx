import React, { ComponentType, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "@/components/shared/ui/LoadingIndicator";
import { useAuth } from "../hooks/AuthProvider";

const AuthRedirect = <T = object>(
  WrappedComponent: ComponentType<T>
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
