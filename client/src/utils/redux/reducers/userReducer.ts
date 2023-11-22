import { UserDocument } from "../../../../../types";
import * as actionTypes from "../actions/actionTypes";

type userAction = {
  type: string;
  payload: UserDocument;
};

type UserState = {
  users: UserDocument[];
};

const initialstate: UserState = {
  users: [],
};
const userReducer = (state = initialstate, action: userAction) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
  }
};

export default userReducer;
