// function countPair(input_array) {
//   // your code here
//   let temp = {};
//   input_array.forEach((item) => {
//     temp[item] = temp[item] ? temp[item] + 1 : 1;
//   });

//   let values = Object.values(temp);
//   console.log(values);

//   let count = 0;

//   values.forEach((value) => {
//     count = count + Math.floor(value / 2);
//   });
//   console.log(count);
// }

// countPair([1, 3, 2, 4, 1, 3]);

// function reverse(input_array) {
//   // your code here
//   let reversedArray = [];
//   for (let i = input_array.length - 1; i >= 0; i--) {
//     reversedArray.push(input_array[i]);
//   }
//   console.log(reversedArray);
//   return reversedArray;
// }

// reverse([1, 2, 4]);

function keypadWords(number) {
  // your code here

  let qwertyObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", " k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (number.length == 1) {
    return qwertyObj[number[0]];
  } else if (number.length > 1) {
    temp = [];

    for (let i = 0; i < qwertyObj[number[0]].length; i++) {
      console.log(qwertyObj[number[0]][i]);
    }
  }
  //   let numberString = number.toString();
  //   console.log(typeof numberString);

  //   for (let i = 0; i < numberString.length; i++) {
  //     console.log(numberString[i]);
  //   }
}
keypadWords("73");

// function king(n) {
//   // your code here

//   let odds = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//       odds.push(i);
//     }
//   }

//   let last = odds.at(-1);
//   let secondLast = odds.at(-2);

//   if (last % 2 == 1) {
//     return last;
//   } else {
//     return secondLast;
//   }
// }

// console.log(king(5));

// class Node {
//   constructor() {
//     this.data = 0;
//     this.next = null;
//   }
// }

// function newNode(data) {
//   let node = new Node();
//   node.data = data;
//   node.next = null;
//   return node;
// }

// function king(n) {
//   if (n == 1) return 1;

//   let last = newNode(1);
//   last.next = last;

//   for (let i = 2; i <= n; i++) {
//     let temp = newNode(i);
//     temp.next = last.next;
//     last.next = temp;
//     last = temp;
//   }

//   let curr = last.next;

//   let temp1 = new Node();
//   while (curr.next !== curr) {
//     temp1 = curr;
//     curr = curr.next;
//     temp1.next = curr.next;

//     temp1 = temp1.next;
//     curr = temp1;
//   }

//   var res = temp1.data;

//   return res;
// }

// console.log(king(5));

// function keypadWords(number, curr = 0, output = []) {
//   let hashTable = [
//     "",
//     "",
//     "abc",
//     "def",
//     "ghi",
//     "jkl",
//     "mno",
//     "pqrs",
//     "tuv",
//     "wxyz",
//   ];
//   let n = number.length;

//   if (curr == n) {
//     output.join("");
//     return output;
//   }

//   for (let i = 0; i < hashTable[number[curr]].length; i++) {
//     output.push(hashTable[number[curr]][i]);
//     keypadWords(number, curr + 1, output);

//     output.pop();

//     if (number[curr] == 0 || number[curr] == 1) return output;
//   }
// }

// console.log(keypadWords("23"));
