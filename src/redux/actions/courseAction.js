import { GET_CINEMA_DETAIL, GET_CINEMA_LIST, GET_COURSE_LIST } from "./actionType";
import Axios from "axios";
export const getCourseList = (pageNumber=1,itemsPerPage=12) => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP00&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemsPerPage}`,
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
            //console.log(res.data);
            dispatch({
              type: GET_COURSE_LIST,
              payload: res.data,
            });
           
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };
  

  export const getCinemaList = () => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
            console.log(res.data);
            console.log(dispatch);
            dispatch({
              type: GET_CINEMA_LIST,
              payload: res.data,
            });
           
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };
  
