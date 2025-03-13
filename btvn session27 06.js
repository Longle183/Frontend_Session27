function isArithmeticSequence(arr) {
    if (Array.isArray(arr) === false || arr.length < 2 || arr.every(isValidInteger) === false) {
        return "Dữ liệu không hợp lệ";
    }

    let diff = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== diff) {
            return false;
        }
    }

    return true;
}

// Hàm kiểm tra số nguyên hợp lệ (không dùng `!`)
function isValidInteger(num) {
    return (Number.isInteger(num) && isNaN(num) === false);
}

console.log(isArithmeticSequence([2, 4, 6, 8]));
console.log(isArithmeticSequence([3, 6, 9, 12, 14]));
console.log(isArithmeticSequence("abc"));
console.log(isArithmeticSequence([1]));  
