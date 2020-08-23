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
