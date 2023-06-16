/**
 * @author Meghna Malhotra
 * @email meghna.malhotra@studiographene.com
 * @create date 2022-06-24 12:29:23
 * @modify date 2022-06-24 12:29:23
 * @desc Moment Util containing date & time functions based on moment.js
 */
import moment from 'moment';
import {daysOfWeeks} from '../constants/Constants';

export const formatStrings = {
  dateFormat: 'DD MMMM YYYY',
  dateFormat2: 'YYYY-MM-DD hh:mm A',
  date: 'YYYY-MM-DD',
  cardDate: 'Do MMM, YYYY',
  dayFormat: 'dddd, DD MMMM',
  dayFormat2: 'dddd, DD MMM',
  weekFormat: 'DD MMM',
  fullWeekFormat: 'DD MMMM',
  courseDueDate: 'Do MMMM, YYYY',
  seconds: 'X',
  timeFormat: 'YYYY-MM-DD hh:mm A',
  timeOnlyFormat: 'hh:mm A',
  time: 'LT',
  milliseconds: 'x',
  monthDate: 'MMMM YYYY',
};

export const momentRead = (dateString, readFormat) => {
  return moment(dateString, readFormat);
};

export const momentReadUnix = (timestamp, format) => {
  return moment.unix(timestamp).format(format);
};

export const formatDate = (format, dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj);
  return date.isValid() ? date.format(format) : '';
};

export const currentMonthDiff = dateObj => {
  dateObj = convertToNumber(dateObj);
  const numberOfMonths = getDayStart(dateObj).diff(
    getDayStart(moment()),
    'month',
  );
  return numberOfMonths;
};

export const currentDateDiff = dateObj => {
  dateObj = convertToNumber(dateObj);
  const numberOfDays = getDayStart(dateObj).diff(getDayStart(moment()), 'days');
  return numberOfDays;
};

export const formatStartOfMonthDate = (format, dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).startOf('month');
  return date.isValid() ? date.format(format) : '';
};

export const formatEndOfMonthDate = (format, dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).endOf('month');
  return date.isValid() ? date.format(format) : '';
};

export const subtractMonthByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).subtract(1, 'months');
  return date;
};
export const addMonthByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).add(1, 'months');
  return date;
};

export const formatStartOfWeek = (format, dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).startOf('week').add('1', 'd');
  return date.isValid() ? date.format(format) : '';
};

export const formatEndOfWeek = (format, dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).endOf('week').add('1', 'd');
  return date.isValid() ? date.format(format) : '';
};

export const getDayStart = (dateObj = moment()) => {
  return moment(dateObj).startOf('day');
};

export const addWeekByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).add(1, 'w');
  return date;
};

export const subtractWeekByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).subtract(1, 'w');
  return date;
};

export const subtractDayByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).subtract(1, 'days');
  return date;
};

export const addDayByOne = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).add(1, 'days');
  return date;
};

export const addDay = (dateObj = moment(), count) => {
  dateObj = convertToNumber(dateObj);
  const date = moment(dateObj).add(count, 'days');
  return date;
};

export const dayOfWeek = (dateObj = moment()) => {
  dateObj = convertToNumber(dateObj);
  const day = moment(dateObj).day();
  return {id: day + 1, value: daysOfWeeks[day]};
};

const convertToNumber = dateObj => {
  if (dateObj && !isNaN(dateObj)) {
    dateObj = Number(dateObj);
  } else if (typeof dateObj === 'string') {
    dateObj = dateObj.replace(' AM', '');
    dateObj = dateObj.replace(' PM', '');
  }
  return dateObj;
};

export const getTimeDifference = (date1, date2) => {
  const end = moment(date2);
  const start = moment(date1);
  return moment.duration(end.diff(start)).asMinutes();
};

export const getTimeDifferenceInMins = (startTime, endTime) => {
  var mins = moment
    .utc(moment(endTime, 'HH:mm:ss').diff(moment(startTime, 'HH:mm:ss')))
    .format('mm');
  var sec = moment
    .utc(moment(endTime, 'HH:mm:ss').diff(moment(startTime, 'HH:mm:ss')))
    .format('ss');
  return `${mins}:${sec}`;
};

export const getTimeDifferenceUnixForDays = timestamp => {
  const currentTimestamp = moment();
  const createdTimestamp = moment(timestamp);
  //time difference in days
  const timeDiff = currentTimestamp.diff(createdTimestamp, 'days');
  if (timeDiff < 1) {
    return true;
  } else {
    return false;
  }
};
