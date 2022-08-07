import { useAppDispatch } from "./hooks";
import { bindActionCreators } from "redux";
import * as UserActionsCreators from '../store/action-creater/users';

export const userActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(UserActionsCreators, dispatch); 
};