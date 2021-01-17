/* eslint-disable no-lone-blocks */
import { GET_CURRENT_WEB_PAGE } from "./actionType";

export const getCurrentWebPage = (url) => {
  return (dispatch) => {
    {
      dispatch({
        type: GET_CURRENT_WEB_PAGE,
        payload: url,
      });
    }
  };
};
