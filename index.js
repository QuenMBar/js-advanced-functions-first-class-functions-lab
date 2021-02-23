// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
    return (fare) => {
        return fare * mult;
    }
}

let fareDoubler = (fare) => createFareMultiplier(2)(fare);
let fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, firstOrLastFun) {
    return firstOrLastFun(drivers);
}
