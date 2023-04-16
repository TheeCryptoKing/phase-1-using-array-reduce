const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Learning Goals
// Learn how the reduce() method works
// Demonstrate using reduce() with a primitive return value
// Demonstrate using reduce() with an object as the return value
// Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array. (Note that the batteryBatches variable has been provided for you in index.js.) Naturally, you should use reduce() for this!
// reduce() method is used when we want to get some information from each element in the collection and gather that information into a final summary value.
let totalBatteries = batteryBatches.reduce(function (totaler, amounts) {
    return totaler += amounts
}, 0)