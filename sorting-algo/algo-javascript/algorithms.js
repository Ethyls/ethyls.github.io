// Function to generate a random array of integers
function createRandomArray(arraySize, highestValue) {
  return Array.from({length: arraySize}, () => Math.ceil(Math.random() * highestValue));
};

// Let's learn Bubble Sort
// Bubble Sort goes through the array and compares neighbors until the whole array is sorted

function bubbleSort(array) {
  let hasPermuted = false;
  // Takes index 0 and 1 of a given array. If array 0 is bigger than array 1, switch positions, and repeat for positions 1 & 2, etc.
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      let tempValue = array[i]
      array[i] = array[i+1]
      array[i+1] = tempValue
      hasPermuted = true;
    };
  };
  // If the function went through the whole array without switching two values, it's sorted, otherwise we go again.
  if (hasPermuted == false) {
    console.log("Array has been sorted!")
  } else {
    bubbleSort(array);
  };
};

// let trialArray = createRandomArray(100, 50);
// console.log(trialArray);
// console.log("Sorting array now...");
// bubbleSort(trialArray);
// console.log(trialArray);

/* Onto Insertion Sort
 Insertion Sort sorts the array in one pass by creating a new sorted array.
 It takes the second item of an array, compares it to the first, and puts it either before or after. It then compares the 3rd item to the 2nd, and if needed to the first, and places it accordingly. So on and so forth until the whole array is sorted.
*/

function insertionSort(array) {
  let sortedArray = [];
  originalArrayLength = array.length
  sortedArray.push(array.shift());
  for (let i = 1; i < originalArrayLength; i++) {
    let pointerValue = array.shift();
    if (pointerValue >= sortedArray[(sortedArray.length - 1)]) {
      sortedArray.push(pointerValue);
    } else if (sortedArray.length === 1 && pointerValue < sortedArray[sortedArray.length -1]) {
      sortedArray.unshift(pointerValue);
    } else {
      let inserted = false;
      let temp = sortedArray.length;
      for (let i2 = temp; i2 > 0; i2--) {
        if (pointerValue >= sortedArray[i2 - 1]) {
          sortedArray.splice(i2, 0, pointerValue);
          inserted = true;
          break;
        };
      };
      if (inserted === false) {
        sortedArray.unshift(pointerValue);
      };
    };

  };
  return sortedArray;
};

let trialArray = createRandomArray(100, 50);
console.log(trialArray);
console.log("Sorting array now...");
let newar = insertionSort(trialArray);
console.log(newar);
