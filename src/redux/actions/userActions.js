import Axios from "axios";
import { GET_CINEMA_DETAIL, GET_CINEMA_SCHEDULE } from "./actionType";

  
  export const getCinemaDetail = (cinemaName = 'BHDStar', logo='') => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaName}`,
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
           // console.log(logo);
           // console.log(dispatch);
            dispatch({
              type: GET_CINEMA_DETAIL,
              payload: res.data,
              logo,
              name:cinemaName
            });
           
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };

  export const getCinemaSchedule= (cinemaName = 'MegaGS',cinemaID='bhd-star-cineplex-3-2') => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinemaName}&maNhom=GP00`,
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
           // console.log(logo);
            console.log(res.data);
            dispatch({
              type: GET_CINEMA_SCHEDULE,
              payload: res.data,
              id:cinemaID
            });
           
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };