// console.log("hello");
// // Bubble sorting
// console.log("bubble sorting");

// const bubbleArr = ["2", "-4", "5", "8", "9", "-1", "0"];

// // for (let i = 0; i < bubbleArr.length; i++) {
// //   for (let j = 0; j < bubbleArr.length - i - 1; j++) {
// //     if (bubbleArr[j] > bubbleArr[j + 1]) {
// //       let temp = bubbleArr[j];
// //       bubbleArr[j] = bubbleArr[j + 1];
// //       bubbleArr[j + 1] = temp;
// //     }
// //   }
// // }

// // console.log(bubbleArr);

// const selectionSortArr = [64, 25, 12, 22, 11, -1];

// // for (let i = 0; i < selectionSortArr.length - 1; i++) {
// //   let min_id = i;
// //   for (let j = i + 1; j < selectionSortArr.length; j++) {
// //     if (selectionSortArr[j] < selectionSortArr[min_id]) {
// //       min_id = j;
// //       console.log(min_id);
// //     }
// //   }
// //   let temp = selectionSortArr[min_id];
// //   selectionSortArr[min_id] = selectionSortArr[i];
// //   selectionSortArr[i] = temp;
// //   console.log(selectionSortArr);
// // }

// // console.log("selection sort");
// // console.log(selectionSortArr);
// console.log(bubbleArr);

// for (let i = 0; i < bubbleArr.length - 1; i++) {
//   for (let j = 0; j < bubbleArr.length - i; j++) {
//     if (bubbleArr[j] > bubbleArr[j + 1]) {
//       let temp = bubbleArr[j];
//       bubbleArr[j] = bubbleArr[j + 1];
//       bubbleArr[j + 1] = temp;
//     }
//   }
// }

// console.log(bubbleArr);

// console.log(selectionSortArr);

// for (let i = 0; i < selectionSortArr.length; i++) {
//   for (j = i + 1; j < selectionSortArr.length; j++) {
//     // let min = selectionSortArr[i]
//     if (selectionSortArr[i] > selectionSortArr[j]) {
//       let temp = selectionSortArr[i];
//       selectionSortArr[i] = selectionSortArr[j];
//       selectionSortArr[j] = temp;
//     }
//   }
// }

// console.log(selectionSortArr);

// const insertionSortArr = ["2", "-4", "5", "8", "9", "-1", "0"];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j];
//     }
//     console.log(j);
//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }
// console.log(insertionSort([2, -2, 1, 3, 7, 5, -1]));
// [];

// // 4,3,7,8,6,2,1
// //     1,2,3,4,6,7,8
// // i=1 1,3,2,4,6,7,8
// // i=2 1,3,4,2,6,7,8
// // i=3 1,3,4,6,2,7,8
// // i=4 1,3,4,6,7,2,8
// // i=5 1,3,4,6,7,8,2

// let arr = [4, 3, 7, 8, 6, 2, 1];

// arr.sort();
// //traverse the array from 1 to n-1
// for (let i = 1; i <= arr.length - 2; i += 2) {
//   // swap the current element with next element
//   let temp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = temp;
// }

// console.log(arr);

// binary search

let arrBinary = [2, 3, 4, 10, 40];

// 5 + 3 / 2

// 0 1 2 3 4
function findElement(arr, n, k) {
  let low = 0;
  let high = n - 1;
  console.log(high);
  while (high >= 1) {
    console.log(Math.floor((high - low) / 2));
    mid = low + Math.floor((high - low) / 2);
    console.log(mid);
    if (arr[mid] == k) {
      return mid;
    }
    if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// console.log(findElement(arrBinary, 5, 40));

// indexOf
// inclued
// find
// findIndex

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }

  return -1;
}

// console.log(linearSearch([2, 5, 7, 12, -3], -3));

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.round((left + right) / 2);
  console.log(left, right, mid);
  while (left < right) {
    if (value > arr[mid]) {
      left = mid + 1;
      mid = Math.round((left + right) / 2);
    }
    if (value < arr[mid]) {
      right = mid - 1;
      mid = Math.round((left + right) / 2);
    }
    if (value == arr[mid]) {
      return mid;
    }
  }
  return -1;
}

// console.log(binarySearch([2, 4, 6, 9, 11, 13, 21, 40, 41, 45, 47], 4));

function naiveString(sampleStr, innerStr) {
  let count = 0;
  for (let i = 0; i < sampleStr.length; i++) {
    let innerCount = 0;
    for (let j = 0; j < innerStr.length; j++) {
      if (sampleStr[i + j] === innerStr[j]) {
        innerCount += 1;
      } else {
        break;
      }
    }
    if (innerCount == innerStr.length) {
      count += 1;
    }
  }
  return count;
}

console.log(naiveString("lololol", "lol"));

// bubble

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([7, 3, 99, 12, 1, -300, -99, 23]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectionSort([7, 3, 99, 12, 1, -300, -99, 23]));

function merge(arr1, arr2) {
  let arr3 = [];
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[firstIndex] < arr2[secondIndex]) {
      arr3.push(arr1[firstIndex]);
      firstIndex++;
    } else {
      arr3.push(arr2[secondIndex]);
      secondIndex++;
    }
  }

  return arr3;
}

console.log(merge([1, 10, 12, 66, 112, 130, 140], [2, 14, 99, 100]));

// quick sort

// pivot function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  console.log(swap(arr, start, swapIdx));

  console.log(arr);

  return swapIdx;
}

console.log(pivot([5, 1, 7, 2, 10, 9, 66, 24]));

function numLength(num) {
  console.log(1234 / 10);
  console.log(num.toString().length);
}

numLength(1234);
