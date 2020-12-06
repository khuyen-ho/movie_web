import moment from "moment";

export const getTime = (jsonDate, duration = 0) => {
  return moment(jsonDate)
    .minute(moment(jsonDate).minute() + duration)
    .format("HH:mm");
};
