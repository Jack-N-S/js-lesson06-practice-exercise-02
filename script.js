var multiply = function (num1, num2) {
    if (typeof num1 !== "number" && typeof num2 == "number") {
        return "Please provide 2 numbers (num1 is not a number)";
    } else if (typeof num2 !== "number" && typeof num1 == "number") {
        return "Please provide 2 numbers (num2 is not a number)";
    } else if (typeof num1 !== "number" && typeof num2 !== "number") {
        return "Please provide a number for num1 and num2";
    } else
    return (num1 * num2);
}

console.log(multiply(2,3));
console.log(multiply(2.5, 4));
console.log(multiply("Jack", 1));
console.log(multiply(1, "Jack"));
console.log(multiply("Jack", "Jack"));
console.log(multiply(2.5555, 3.4));