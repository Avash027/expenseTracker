const formatDate = (dat) => {
  const d = new Date(dat);
  let month = `${d.getMonth() + 1}`;
  let date = `${d.getDate()}`;
  let year = `${d.getFullYear()}`;

  if (month.length < 2) month = `0${month}`;
  if (date.length < 2) date = `0${date}`;

  return [year, month, date].join("-");
};

export default formatDate;
