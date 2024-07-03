// Question 2: Rotate array by k
// Given an integer array nums, rotate the array to the right by k stepa.
// where k is non negative

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 ----> Output: [5, 6, 7, 1, 2, 3, 4]
// Input: nums = [-1, -100, 3, 99], k = 2 ----------> Output: [3, 99, -1, -100]



// Solution 1: using inbuit function

// Process: [[1, 2, 3, 4, 5, 6, 7] => [7, 1, 2, 3, 4, 5, 6] => [6, 7, 1, 2, 3, 4, 5] => [5, 6, 7, 1, 2, 3, 4]

function rotateArr(nums, k) {
    let size = nums.length;

    if (size < k) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, k); // [5, 6, 7]      // O(n)
    nums.unshift(...rotated);       // O(n)

    return nums;
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArr([-1, -100, 3, 99], 2));