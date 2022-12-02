const dayjs = require("dayjs");
// alert("Hoje é " + dayjs().format("DD/MM/YYYY"));

function dateDefault() {
  const dateValue = document.getElementById("date").value;
  const dateValueFormat = dayjs(dateValue).format("DD/MM/YYYY");
  const resultDateValue = document.getElementById("inputFormat");
  resultDateValue.value = dateValueFormat;
}

function birthday() {
  const birthday = document.getElementById("birthday").value;
  const birthdayFormat = dayjs(birthday).format("DD/MM/YYYY");
  const today = dayjs();
  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = dayjs(birthday).add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day");
  const age = document.getElementById("ageInYears");
  const birthdayNext = document.getElementById("birthdayNext");
  const birthdayInDay = document.getElementById("birthdayInDay");

  age.value = `${ageInYears} anos`;
  birthdayNext.value = dayjs(nextBirthday).format("DD/MM/YYYY");
  birthdayInDay.value = `${daysToNextBirthday} dias`;
}

function clearValues() {
  document.getElementById("birthday").value = "";
  document.getElementById("ageInYears").value = "";
  document.getElementById("birthdayNext").value = "";
  document.getElementById("birthdayInDay").value = "";
}

function clearValuesFormat() {
  document.getElementById("date").value = "";
  document.getElementById("inputFormat").value = "";
}

document.getElementById("dateDefault").addEventListener("click", dateDefault);
document
  .getElementById("clearFormat")
  .addEventListener("click", clearValuesFormat);
document.getElementById("dateNiver").addEventListener("click", birthday);
document.getElementById("clear").addEventListener("click", clearValues);
