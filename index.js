const addDays = require("date-fns/addDays");
const date = (days) => {
  const newdate = addDays(new Date(22, 08, 2022), days);
  return `${newdate.getDate()}-${newdate.getMonth()}-${newdate.getFullYear()}`;
};

module.exports = date;

date(5);
