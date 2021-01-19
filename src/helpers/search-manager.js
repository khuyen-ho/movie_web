import { getFullDate, getTime } from "./time-manager";
export const flatArray = (array) => {
  return (array = [].concat.apply([], array));
};

export const getMovieId = (data, movieName) => {
  if (data) {
    return data
      .filter((movie) => movie.tenPhim === movieName)
      .map((movie) => movie.maPhim);
  }
  return "";
};

export const getCinemaSystems = (data) => {
  if (data.heThongRapChieu) {
    return data.heThongRapChieu.map(
      (cinemaSystem) => cinemaSystem.tenHeThongRap
    );
  }
  return [];
};

export const getCinemas = (data) => {
  let mapData = [];
  if (data.heThongRapChieu) {
    mapData = data.heThongRapChieu.map((system) =>
      system.cumRapChieu.map((cinema) => cinema.tenCumRap)
    );
    return flatArray(mapData);
  }
  return mapData;
};

export const getShowTimeDate = (data, cinemaName) => {
  let mapData = [];
  if (data.heThongRapChieu) {
    mapData = data.heThongRapChieu.map((system) =>
      system.cumRapChieu
        .filter((cinema) => cinema.tenCumRap === cinemaName)
        .map((cinema) =>
          cinema.lichChieuPhim.map((showTimes) =>
            getFullDate(showTimes.ngayChieuGioChieu)
          )
        )
    );

    let flatArr = flatArray(flatArray(mapData));
    return Array.from(new Set(flatArr));
  }
  return mapData;
};

export const getShowTimes = (data, cinemaName, date) => {
  let mapData = [];
  if (data.heThongRapChieu) {
    mapData = data.heThongRapChieu.map((system) =>
      system.cumRapChieu
        .filter((cinema) => cinema.tenCumRap === cinemaName)
        .map((cinema) =>
          cinema.lichChieuPhim
            .filter(
              (showTime) => getFullDate(showTime.ngayChieuGioChieu) === date
            )
            .map((showTime) => getTime(showTime.ngayChieuGioChieu))
        )
    );

    return flatArray(flatArray(mapData));
  }
  return mapData;
};
