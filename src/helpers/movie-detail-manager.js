import { getFullDate } from "./time-manager";
import { flatArray } from "./array-manager";

export const getSystems = (data) => {
  if (data.heThongRapChieu) {
    return data.heThongRapChieu.map((system) => ({
      id: system.maHeThongRap,
      name: system.tenHeThongRap,
      logo: system.logo,
    }));
  }

  return [];
};

export const getCinemaOnDate = (data, systemId, date) => {
  if (data.heThongRapChieu) {
    let cinemas = flatArray(
      data.heThongRapChieu
        .filter((system) => system.maHeThongRap === systemId)
        .map((system) => system.cumRapChieu)
    );

    let cinemaOnDate = [];

    for (let i = 0; i < cinemas.length; i++) {
      let showTimes = cinemas[i].lichChieuPhim;

      for (let j = 0; j < showTimes.length; j++) {
        if (getFullDate(showTimes[j].ngayChieuGioChieu) === "07/01/2019") {
          cinemaOnDate.push(cinemas[i]);
          break;
        }
      }
    }

    return cinemaOnDate;
  }
  return [];
};

export const getShowTimeOnDate = (cinema, date) => {
  if (cinema) {
    return cinema.lichChieuPhim.filter(
      (showTime) => getFullDate(showTime.ngayChieuGioChieu) === date
    );
  }

  return [];
};

export const getShowTimeDates = (data) => {
  if (data.heThongRapChieu) {
    let mapData = data.heThongRapChieu.map((system) =>
      system.cumRapChieu.map((cinema) =>
        cinema.lichChieuPhim.map((showTimes) =>
          getFullDate(showTimes.ngayChieuGioChieu)
        )
      )
    );

    let flatArr = flatArray(flatArray(mapData));
    return Array.from(new Set(flatArr));
  }

  return [];
};
