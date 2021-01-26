import {
  GET_EDIT_MOVIE_STATUS,
  GET_EDITED_MOVIE,
  GET_KEYWORD_MOVIE,
  FETCH_MOVIES,
  GET_POSTER,
  GET_SELECTED_MOVIE,
} from "../actions/actionType";

let initialState = {
  list: [],
  isEdited: false,
  edited: {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh:
      "https://images.moviepostershop.com/replicas-movie-poster-100077879d1.jpg",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: new Date(),
    danhGia: 0,
  },
  keyWord: "",
  poster: null,
  selected: "",
  selectedAdd: "",
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      state.list = action.payload;
      return { ...state };
    }
    case GET_EDIT_MOVIE_STATUS: {
      state.isEdited = action.payload;
      return { ...state };
    }
    case GET_EDITED_MOVIE: {
      state.edited = action.payload;
      return { ...state };
    }
    case GET_KEYWORD_MOVIE: {
      state.keyWord = action.payload;
      return { ...state };
    }
    case GET_POSTER: {
      state.poster = action.payload;
      return { ...state };
    }
    case GET_SELECTED_MOVIE: {
      state.selected = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movies;
