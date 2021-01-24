import { bookingService } from "../../services";
import { GET_BOOKING_LIST, RESET_STATE } from "./actionType";

export const getSeatList = (showTimeId) => {
  return (dispatch) => {
    bookingService
      .fetchSeatList(showTimeId)
      .then((res) => {
        dispatch({ type: GET_BOOKING_LIST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const bookTicket = (data, token) => {
  return (dispatch) => {
    bookingService
      .bookTicket(data, token)
      .then((res) => {
        alert("Đặt vé thành công, chúc bạn xem phim vui vẻ.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
