import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserDocument } from "../../../types";
import { useQuery } from "react-query";
import { getUser } from "../queries/userQueries";

type Props = {
  children: ReactNode;
};

export type AuthContextValue = {
  user: UserDocument | null | undefined;
  setUser: Dispatch<SetStateAction<UserDocument | null | undefined>>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => null,
  isLoading: false,
});

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserDocument | null | undefined>(null);

  const { data, isLoading, isSuccess } = useQuery("user", getUser, {
    enabled: user === null,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data);
    }
  }, [data, isSuccess]);

  console.log("UserData: ", user)

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
