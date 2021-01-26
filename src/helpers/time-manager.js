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

export const getFullDate = (jsonDate) => {
  let formatedDate = new Date(jsonDate);

  let date = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  let year = formatedDate.getFullYear();

  if (date < 10) {
    date = String("0" + date).slice(-2);
  }

  if (month < 10) {
    month = String("0" + month).slice(-2);
  }

  return date + "/" + month + "/" + year;
};

export const getFullDateTime = (jsonDate) => {
  let formatedDate = new Date(jsonDate);
  let date = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  let year = formatedDate.getFullYear();
  let hour = formatedDate.getHours();
  let min = formatedDate.getMinutes();

  if (date < 10) {
    date = String("0" + date).slice(-2);
  }

  if (month < 10) {
    month = String("0" + month).slice(-2);
  }

  return date + "/" + month + "/" + year + " " + hour + ":" + min;
};

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
