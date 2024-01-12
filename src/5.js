const moment = require("moment");

function operationCount(operation) {
  const terms = operation.split(" ");
  const startDate = moment(terms[4], "DDMMMYY");
  const endDate = moment(terms[5], "DDMMMYY");
  const weekdays = terms[6];
  let count = 0;

  while (startDate.isSameOrBefore(endDate)) {
    // Increase count when weekday of current date exists in weekday filter
    if (weekdays.indexOf(`${startDate.isoWeekday()}`) !== -1) {
      count++;
    }
    startDate.add(1, "day");
  }

  return count;
}

module.exports = { operationCount };
