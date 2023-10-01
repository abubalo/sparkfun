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
import axios, { AxiosError } from "axios";

type Props = {
  children: ReactNode;
};

export type AuthContextValue = {
  user: UserDocument | null;
  setUser: Dispatch<SetStateAction<UserDocument | null>>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => null,
  loading: false,
});

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get("api/user");
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
