import moment from "moment";

const convertDays = [
  "Chủ nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

export const getTime = (jsonDate, duration = 0) => {
  return moment(jsonDate)
    .minute(moment(jsonDate).minute() + duration)
    .format("HH:mm");
};

export const getDay = (jsonDate) => {
  return convertDays[parseInt(moment(jsonDate).format("d"))];
};

export const getDate = (jsonDate) => {
  return moment(jsonDate).format("DD");
};

export const getDateList = (startDate, numberOfDate = 1) => {
  const dateList = [moment(startDate)];
  for (let i = 1; i < numberOfDate; i++) {
    dateList.push(moment(startDate).add(i, "days"));
  }
  return dateList;
};
