import { GET_COURSE_LIST } from "./actionType";
import Axios from "axios";
export const getCourseList = () => {
    return (dispatch) => {
      {
        //call api
       // connector({
         Axios({ 
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP00&soTrang=1&soPhanTuTrenTrang=9",
          method: "GET",
          data: null,
         
        })
          .then(function thanhCong(res) {
            console.log(res.data);
            dispatch({
              type: GET_COURSE_LIST,
              payload: res.data,
            });
            console.log(res.data);
          })
          .catch(function thatBai(err) {
            console.log(err);
          });
      }
    };
  };
  