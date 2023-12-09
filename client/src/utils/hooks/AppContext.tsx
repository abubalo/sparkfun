import {
  useReducer,
  createContext,
  useContext,
  FC,
  Dispatch,
  ReactNode,
} from "react";
import {
  BookingDocument,
  ReviewDocument,
  UserDocument,
  VideoDocument,
} from "../../../../types";

interface State {
  users: UserDocument[];
  bookings: BookingDocument[];
  reviews: ReviewDocument[];
  videos: VideoDocument[];
}

type Action =
  | { type: "ADD_USER"; payload: UserDocument }
  | { type: "GET_USER"; payload: UserDocument }
  | { type: "ADD_TALENT"; payload: UserDocument }
  | { type: "ADD_BOOKING"; payload: BookingDocument }
  | { type: "Upload_VIDEO"; payload: VideoDocument }
  | {
      type: "UPDATE_BOOKING_STATUS";
      payload: { bookingId: string; status: BookingDocument["status"] };
    };

const initialState: State = {
  users: [],
  bookings: [],
  reviews: [],
  videos: [],
};

const AppStateContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "GET_USER":

    return state
      // case 'ADD_TALENT':
    //   return {
    //     ...state,
    //     talents: [...state.talents, action.payload],
    //   };
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case 'UPDATE_BOOKING_STATUS':
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload.bookingId
            ? { ...booking, status: action.payload.status }
            : booking
        ),
      };

    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};
export const AppStateProvide: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to access the app state and dispatch function
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
