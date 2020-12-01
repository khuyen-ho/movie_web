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
