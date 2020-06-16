export const getFormatDate = date => {
  const year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + '-' + month + '-' + day;
};

export const getMaxDate = month => {
  const realMonth = month - 1;
  var nMonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return nMonthDay[realMonth];
};
