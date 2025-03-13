function chunkArray(arr, size) {
    if (Array.isArray(arr) === false || isValidInteger(size) === false) {
        return "Dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

// Hàm kiểm tra số nguyên hợp lệ (không dùng `!`)
function isValidInteger(str) {
    let num = Number(str);
    return (isNaN(num) === false && Number.isInteger(num) && num > 0);
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); 
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArray("abc", 3));
