import { GET_ID_CINEMA_SYSTEM } from "../actions/actionType";

let initialState = {
  list: [
    {
      id: "BHDStar",
      name: "BHD Star Cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      id: "CGV",
      name: "CGV",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      id: "CineStar",
      name: "CineStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      id: "Galaxy",
      name: "Galaxy Cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      id: "LotteCinima",
      name: "Lotte Cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      id: "MegaGS",
      name: "MegaGS",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
  selected: "BHDStar",
  selectedLogo:"http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
};

const cinemaSystem = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA_SYSTEM: {
      state.selected = action.payload;
      state.selectedLogo = action.logo
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemaSystem;
