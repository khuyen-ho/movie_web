import { getFullDate, getTime } from "./time-manager";
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
    let mapData = [];
    mapData = data
      .filter((system) => system.maHeThongRap === systemId)
      .map((system) =>
        system.lstCumRap.map((cinema) => ({
          id: cinema.maCumRap,
          name: cinema.tenCumRap,
          address: cinema.diaChi,
        }))
      );

    return flatArray(flatArray(mapData));
  }

  return [];
};
