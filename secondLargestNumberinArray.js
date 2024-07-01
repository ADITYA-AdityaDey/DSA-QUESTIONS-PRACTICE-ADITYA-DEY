// Question: Second Largest Number

// [10, 20, 50, 10, 45, 78, 98, 100, 100]



// Solution 1: Brute Force Approach

function secondLargestNumber(array) {
    const uniqueArray = Array.from(new Set(array));

    uniqueArray.sort((a, b) => {      // O(nlogn)
        return b - a;
    });

    if (uniqueArray.length >= 2) {
        return uniqueArray[1];
    } else {
        return -1;
    }

}

console.log(secondLargestNumber([10, 20, 50, 10, 45, 78, 98, 100, 100]));

// Time Complexity: O(nlogn)





// Solution 2: Optimised Approach (Not using any inbuilt method)

function secondLargestEle(elementsArr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < elementsArr.length; i++) {
        if (elementsArr[i] > largest) {
            secondLargest = largest;
            largest = elementsArr[i];
        } else if (elementsArr[i] != largest && elementsArr[i] > secondLargest) {
            secondLargest = elementsArr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargestEle([10, 20, 50, 10, 45, 78, 98, 100, 100]));