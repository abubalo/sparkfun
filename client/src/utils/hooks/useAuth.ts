import { useEffect } from "react";
import {
  setUser,
  setLoading,
  setError,
} from "../redux/reducers/authenticationSlice";
import { getUser } from "../queries/userQueries";
import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authentication.user);
  const isLoading = useAppSelector((state) => state.authentication.isLoading);
  const error = useAppSelector((state) => state.authentication.error);
  const { data, isError } = useQuery("fetchUser", getUser);


  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      dispatch(setLoading(false)); // Set loading to false when user data is available
    } else if (isError) {
      dispatch(setError("Error fetching user")); // Set error message in case of an error
      dispatch(setLoading(false)); // Set loading to false when an error occurs
    } else {
      dispatch(setLoading(true)); // Set loading to true initially or while fetching
    }
  }, [data, isError, dispatch]);

  return { setUser, setError, user, isLoading, error };
};

export default useAuth;
