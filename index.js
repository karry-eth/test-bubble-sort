const fastBulleSort = require('fast-bubble-sort');
const debug = require('debug');
const typescript = require('typescript');

// More comprehensive test case for the bubbleSort function
function testBubbleSort() {
  // Define test arrays for different scenarios
  const testArrays = [
    { description: "random numbers", array: [34, 17, 23, 2, 89, 45, 67, 12, 99, 5] },
    { description: "already sorted", array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { description: "reverse sorted", array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
    { description: "all duplicates", array: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
    { description: "single element", array: [42] },
    { description: "empty array", array: [] }
  ];

  // Iterate through each test array
  testArrays.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test.description}`);
    console.log("Original array:", test.array);

    // Call the bubbleSort function
    let sortedArr = bubbleSort(test.array);
    console.log("Sorted array:", sortedArr);

    // Verify the sorting result
    let isSorted = true;
    for (let i = 1; i < sortedArr.length; i++) {
      if (sortedArr[i - 1] > sortedArr[i]) {
        isSorted = false;
        break;
      }
    }

    // Print a message based on whether the array is correctly sorted
    if (isSorted) {
      console.log("Result: The bubbleSort function works correctly for this test.\n");
    } else {
      console.log("Result: The bubbleSort function does not work correctly for this test.\n");
    }
  });
}

module.exports = testBubbleSort;
