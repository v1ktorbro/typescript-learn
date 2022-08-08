import { bindActionCreators } from "redux";
import { useAppDispatch } from "./hooks";
import ActionCreaters from '../store/action-creater/';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreaters, dispatch); 
};