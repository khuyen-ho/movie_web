import { getFullDate, getTime } from "./time-manager";
import { flatArray } from "./array-manager";

export const getMovieId = (data, movieName) => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].tenPhim === movieName) {
        return data[i].maPhim;
      }
    }
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

export const getCinemaSystemId = (data, systemName) => {
  if (data) {
    return data
      .filter((cinemaSystem) => cinemaSystem.tenHeThongRap === systemName)
      .map((cinemaSystem) => cinemaSystem.maHeThongRap);
  }
  return "";
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

export const getCinemaNumbers = (data, cinemaName) => {
  let mapData = [];
  if (data) {
    mapData = data
      .filter((cinema) => cinema.tenCumRap === cinemaName)
      .map((cinema) => cinema.danhSachRap.map((number) => number.tenRap));
    return flatArray(mapData);
  }
  return mapData;
};

export const getCinemaNumberId = (data, cinemaName, cinemaNumber) => {
  if (data) {
    let numbers = flatArray(
      data
        .filter((cinema) => cinema.tenCumRap === cinemaName)
        .map((cinema) => cinema.danhSachRap)
    );

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].tenRap === cinemaNumber) {
        return numbers[i].maRap;
      }
    }
  }
  return "";
};

export const getShowTimeDates = (data, cinemaName) => {
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

export const getSelectedShowTimeId = (data, cinemaName, date, time) => {
  if (data.heThongRapChieu) {
    let mapData = [];
    mapData = data.heThongRapChieu.map((system) =>
      system.cumRapChieu
        .filter((cinema) => cinema.tenCumRap === cinemaName)
        .map((cinema) =>
          cinema.lichChieuPhim.filter(
            (showTime) =>
              getFullDate(showTime.ngayChieuGioChieu) === date &&
              getTime(showTime.ngayChieuGioChieu) === time
          )
        )
    );

    return flatArray(flatArray(mapData))[0].maLichChieu;
  }
};
