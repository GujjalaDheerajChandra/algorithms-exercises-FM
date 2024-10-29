/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const getDigit = (number, place) => {
  while (place > 0) {
    number = Math.floor(number / 10);
    place--;
  }

  return number % 10;
};

const getLong = (array) => {
  let resl = 0;
  for (let item of array) {
    const curr = item.toString().length;
    resl = curr > resl ? curr : resl;
  }
  return resl;
};

function radixSort(array) {
  // code goes here
  const max = getLong(array);
  let m = new Array(10).fill().map(() => []);
  for (let i = 0; i < max; i++) {
    while (array.length) {
      const latest = array.shift();
      m[getDigit(latest, i)].push(latest);
    }
    for (let k = 0; k < 10; k++) {
      while (m[k].length) {
        array.push(m[k].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
