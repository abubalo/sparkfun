import { UserDocument } from '../../../../../types';
import * as actionTypes from './actionTypes';

export const addUser = (user: UserDocument) => ({
  type: actionTypes.ADD_USER,
  payload: user,
});

export const getUser = (userId: string) => ({
  type: actionTypes.GET_USER,
  payload: userId,
});
