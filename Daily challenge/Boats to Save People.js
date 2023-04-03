/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {

    let boatsCount = 0;
    people.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = people.length - 1;

    while (leftPointer <= rightPointer) {
        if ((people[rightPointer] + people[leftPointer]) <= limit) {
            leftPointer++;
        }
        rightPointer--;
        boatsCount++;
    }
    return boatsCount;
};