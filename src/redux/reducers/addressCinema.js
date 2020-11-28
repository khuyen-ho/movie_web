import { GET_ADDRESS_CINEMA } from "../actions/actionType";

let initialState = [
    {
      maCumRap: "bhd-star-cineplex-3-2",
      tenCumRap: "BHD Star Cineplex - 3/2",
      diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
      danhSachRap: [
        {
          maRap: 451,
          tenRap: "Rạp 1"
        },
        {
          maRap: 452,
          tenRap: "Rạp 2"
        },
      ]
    },
    {
      maCumRap: "bhd-star-cineplex-bitexco",
      tenCumRap: "BHD Star Cineplex - Bitexco",
      diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      danhSachRap: [
        {
          maRap: 461,
          tenRap: "Rạp 1"
        },
        {
          maRap: 462,
          tenRap: "Rạp 2"
        }
      ]
    }
  ]
  
const addressCinema = (state = initialState, action) => {
    switch (action.type) {
    case GET_ADDRESS_CINEMA:{
        return action.payload
    }
      default:
        return state;
    }
  };
  
  export default addressCinema;