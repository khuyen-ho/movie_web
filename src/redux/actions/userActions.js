import Axios from "axios";
import { GET_CINEMA_DETAIL } from "./actionType";

  
  export const getCinemaDetail = (cinemaID = 'BHDStar') => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaID}`,
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
            console.log(res.data);
            console.log(dispatch);
            dispatch({
              type: GET_CINEMA_DETAIL,
              payload: res.data,
            });
           
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };