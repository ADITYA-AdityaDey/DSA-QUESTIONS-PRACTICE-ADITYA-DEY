// Question 2: Rotate array by k
// Given an integer array nums, rotate the array to the right by k steps.
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

// Time Complexity: O(n) + O(n) = O(n)



// Solution 2: without inbuilt functions

// Process: [1, 2, 3, 4, 5, 6, 7] => reverse the whole array [7, 6, 5, 4, 3, 2, 1] => reverse upto k times(5, 6, 7) [5, 6, 7, 4, 3, 2, 1] => now reverse remaining part [5, 6, 7, 1, 2, 3, 4]

function rotateArray(nums, k) {
    let size = nums.length;

    if (size < k) {
        k = k % size;
    }

    reverse(nums, 0, nums.length - 1); // it's reverse the whole array [7, 6, 5, 4, 3, 2, 1]        // O(n)
    reverse(nums, 0, k - 1); // it's reverse upto k time (5, 6, 7) [5, 6, 7, 4, 3, 2, 1]        // O(k)
    reverse(nums, k, nums.length - 1); // it's now reverse remaining part [5, 6, 7, 1, 2, 3, 4]     // O(n - k)

    return nums;
}

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7]));
console.log(rotateArray([-1, -100, 3, 99, 2]));


// Time Complexity: O(n)    // remove the constatnt from O(n) + O(k) + O(n - k) and get/choose the linear time complexity O(n)
// Space Complexity: O(1)   // because i don't create another array just use only one array