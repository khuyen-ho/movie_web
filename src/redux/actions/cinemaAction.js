import { useSelector } from "react-redux";
import { cinemaSystemService } from "../../services";
import { GET_CINEMA_INFO } from "./actionType";

export const getCinemaInfo = (id, logo) => {
  const refactorData = (list) => {
    return list.map((item) => ({
      id: item.maCumRap,
      name: item.tenCumRap,
      address: item.diaChi,
      logo,
    }));
  };

 // console.log(id,logo);
  return (dispatch) => {
    cinemaSystemService
      .fetchCinemaInfo(id)
      .then((res) => {
        //console.log(res.data);
        const list = refactorData(res.data);
        console.log(list);
        dispatch({
          type: GET_CINEMA_INFO,
          payload: list,
        });
      })
      .catch((err) => console.log(err));
  };
};
