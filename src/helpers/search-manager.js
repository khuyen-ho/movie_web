import { getFullDate, getTime } from "./time-manager";
export const flatArray = (array) => {
  return (array = [].concat.apply([], array));
};

export const getCinemaSystems = (data) => {
  return data.heThongRapChieu.map((cinemaSystem) => cinemaSystem.tenHeThongRap);
};

export const getCinemas = (data) => {
  let mapData = data.heThongRapChieu.map((system) =>
    system.cumRapChieu.map((cinema) => ({
      id: cinema.maCumRap,
      name: cinema.tenCumRap,
    }))
  );

  return flatArray(mapData);
};

export const getShowTimeDate = (data, cinemaId) => {
  let mapData = data.heThongRapChieu.map((system) =>
    system.cumRapChieu
      .filter((cinema) => cinema.maCumRap === cinemaId)
      .map((cinema) =>
        cinema.lichChieuPhim.map((showTimes) =>
          getFullDate(showTimes.ngayChieuGioChieu)
        )
      )
  );

  let flatArr = flatArray(flatArray(mapData));

  return Array.from(new Set(flatArr)).map((item, index) => ({
    id: index,
    name: item,
  }));
};

export const getShowTimes = (data, cinemaId, date) => {
  let mapData = data.heThongRapChieu.map((system) =>
    system.cumRapChieu
      .filter((cinema) => cinema.maCumRap === cinemaId)
      .map((cinema) =>
        cinema.lichChieuPhim
          .filter(
            (showTime) => getFullDate(showTime.ngayChieuGioChieu) === date
          )
          .map((showTime) => ({
            id: cinema.maCumRap,
            name: getTime(showTime.ngayChieuGioChieu),
          }))
      )
  );

  return flatArray(flatArray(mapData));
};
