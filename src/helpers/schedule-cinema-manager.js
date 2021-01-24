import { getFullDate } from "./time-manager";
import { flatArray } from "./array-manager";

export const getCinemaSystems = (data) => {
  if (data) {
    return data.map((system) => ({
      id: system.maHeThongRap,
      name: system.tenHeThongRap,
      logo: system.logo,
    }));
  }

  return [];
};

export const getCinemas = (data, systemId) => {
  if (data) {
    let mapData = data
      .filter((system) => system.maHeThongRap === systemId)
      .map((system) =>
        system.lstCumRap.map((cinema) => ({
          maCumRap: cinema.maCumRap,
          tenCumRap: cinema.tenCumRap,
          diaChi: cinema.diaChi,
        }))
      );

    return flatArray(flatArray(mapData));
  }

  return [];
};

export const getMovieOnDate = (data, systemId, cinemaId, date) => {
  if (data) {
    let cinemas = flatArray(
      data
        .filter((system) => system.maHeThongRap === systemId)
        .map((system) => system.lstCumRap)
    );

    let movies = flatArray(
      cinemas
        .filter((cinema) => cinema.maCumRap === cinemaId)
        .map((system) => system.danhSachPhim)
    );

    let movieOnDate = [];

    for (let i = 0; i < movies.length; i++) {
      let showTimes = movies[i].lstLichChieuTheoPhim;

      for (let j = 0; j < showTimes.length; j++) {
        if (getFullDate(showTimes[j].ngayChieuGioChieu) === date) {
          movieOnDate.push(movies[i]);
          break;
        }
      }
    }

    return movieOnDate;
  }

  return [];
};

export const getShowTimeOnDate = (movie, date) => {
  if (movie) {
    return movie.lstLichChieuTheoPhim.filter(
      (showTime) => getFullDate(showTime.ngayChieuGioChieu) === date
    );
  }

  return [];
};
