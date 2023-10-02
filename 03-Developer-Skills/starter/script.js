// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//DEBUG, TODO
// 56 - Installing Node.js and Setting up a DEV Environment
// 57 - Learning how to code
// 59 -
// PROBLEM:
// We work for a company building a smart home therometer.
// Our most recewnt task is this: given an array of temperatures
// of one day, calculate the temperature amplitude.  Keep in mind
// that soetimes there might be a sensor error
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1-understand the problem
// what is temperature amplitude? difference between highest and lowest temp in array
// how to compute max and min temperatures?
// what is a sensor error aned what to do?

// 2-beaingup into sub-problemws
// how to ignore errors
// find max value in temp array
// find min value in temp array
// subtradt min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
// program should receive 2 arrays of data
*/
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // fix bug
    value: Number(prompt('Degrees celsius:')),
  };

  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// Identify the bug
console.log(measureKelvin());
