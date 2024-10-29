/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) {
    return nums;
  } else {
    return mergeStich(
      mergeSort(nums.slice(0, Math.floor(nums.length / 2))),
      mergeSort(nums.slice(Math.floor(nums.length / 2)))
    );
  }
};

const mergeStich = (arr1, arr2) => {
  let abc = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      abc.push(arr1.shift());
    } else {
      abc.push(arr2.shift());
    }
  }
  return abc.concat(arr1, arr2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
