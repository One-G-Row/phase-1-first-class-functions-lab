// Code your solution in this file!
//first two elements
const returnFirstTwoDrivers = function (myArr) {
  const newArr = [...myArr];
  return newArr.slice(0, 2);
};
console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

//last two elements
const returnLastTwoDrivers = function (myArr) {
  const newArr = [...myArr];
  return newArr.slice(-2);
};
console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

//combine both arrays
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

//quadruples
function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  };
}
console.log(createFareMultiplier(4, 20));

//doubles
function fareDoubler(fare) {
  const doubler = createFareMultiplier(2);
  return doubler(fare);
}
console.log(fareDoubler(20));

//triples
function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}
console.log(fareTripler(25));

//
function selectDifferentDrivers(drivers, select) {
  if (returnFirstTwoDrivers === select) {
    return returnFirstTwoDrivers(drivers);
  } else {
    return returnLastTwoDrivers(drivers);
  }
}

console.log(
  selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers)
);
