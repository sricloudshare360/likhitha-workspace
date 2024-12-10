function findLargestAndSmallest() {
    let numbers = [3, 5, 1, 8, 55, 7];
    let largest = numbers[0];
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    document.getElementById("result").innerText = 
        "Largest Number: " + largest + "\nSmallest Number: " + smallest;
}
