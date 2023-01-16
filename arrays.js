// let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
let arr = [2, 7, 4, 5, 7, 7, 5];

arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr.includes(i)) {
    console.log(i);
    // console.log(arr[i]);
    arr[i] = i;
  } else {
    console.log(i);
    arr[i] = -1;
  }
  //   if (arr[i] == i) {
  //     arr[i] = i;
  //   } else {
  //     arr[i] = -1;
  //   }
}
console.log(arr);

function breakNumber(n) {
  let count = 0;
  let i;
  let j = 0;
  let k = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        if (i + k + j == n) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(breakNumber(3));
