import { GET_MOVIE_DETAIL } from "../actions/actionType";

let initialState = [{
    maPhim: 1288,
    tenPhim: "Jurassic World",
    biDanh: "jurassic-world",
    trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
    moTa:
      "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
    maNhom: "GP00",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 5.9,
}];

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default movieDetail;
