const dayjs = require("dayjs");
const localeData = require('dayjs/plugin/localeData');
const utc = require('dayjs/plugin/utc');
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
const duration = require('dayjs/plugin/duration');

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(localeData);

exports.dayjs = dayjs;
