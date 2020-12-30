import { GET_ID_CINEMA } from "../actions/actionType";

let initialState = {
  list: [
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-bitexco",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - Bitexco",
      address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
    },
    {
      id: "bhd-star-cineplex-pham-hung",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - Phạm Hùng",
      address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
    },
    {
      id: "bhd-star-cineplex-vincom-le-van-viet",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - Vincom Lê Văn Việt",
      address: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
    },
    {
      id: "bhd-star-cineplex-vincom-quang-trung",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - Vincom Quang Trung",
      address: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
    },
    {
      id: "bhd-star-cineplex-vincom-thao-dien",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - Vincom Thảo Điền",
      address: "L5-Megamall, 159 XL Hà Nội, Q.2",
    },
  ],
  selected: "bhd-star-cineplex-3-2",
};

const cinemas = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_CINEMA: {
      state.selected = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default cinemas;
