const {dayjs} = require('./dayjs');

exports.getMonthPeriode = (month, year) => {
  const months = dayjs.months();
  const reference = year ? dayjs().year(year) : dayjs();
  const firstDay = reference.month(months.findIndex((m => m.toLowerCase() === (month.toLowerCase())))).startOf('month');
  const lastDay = firstDay.endOf('month');
  return {
    from: firstDay,
    to: lastDay
  }
}

exports.getPeriodeFromDates = (from, to) => {
  return {
    from: dayjs(from).startOf('day'),
    to: dayjs(to).endOf('day'),
  }
};

exports.isAvailableOnPeriod = (month, periode) => {
  const c1 = dayjs(periode.from).isSameOrBefore(month.from, 'days') && dayjs(month.from).isSameOrBefore(periode.to, 'days');
  const c2 = dayjs(month.from).isSameOrBefore(periode.from, 'days') && dayjs(periode.from).isSameOrBefore(month.to, 'days');
  return c1 || c2;
}