function integerProcessing() {
    let numbers = [];

    while (true) {
        console.log("\n===== MENU XỬ LÝ SỐ NGUYÊN =====");
        console.log("1. Nhập danh sách số nguyên");
        console.log("2. Tính trung bình các số");
        console.log("3. Tìm số chẵn lớn nhất");
        console.log("4. Tìm số lẻ nhỏ nhất");
        console.log("5. Thoát");

        let choice = prompt("Chọn chức năng (1-5):");

        if (choice === "5") {
            console.log("Thoát chương trình.");
            return;
        }

        if (choice === "1") {
            let count = prompt("Nhập số lượng phần tử:");
            if (isValidInteger(count)) {
                count = Number(count);
                numbers = []; // Xóa dữ liệu cũ
                for (let i = 0; i < count; i++) {
                    let num = prompt(`Nhập số nguyên thứ ${i + 1}:`);
                    if (isValidInteger(num)) {
                        numbers.push(Number(num));
                    } else {
                        console.log("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên.");
                        i--;
                    }
                }
                console.log("Danh sách số nguyên:", numbers);
            } else {
                console.log("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên dương.");
            }
        }

        if (choice === "2") {
            if (numbers.length > 0) {
                let sum = numbers.reduce((total, num) => total + num, 0);
                console.log(`Trung bình các số: ${(sum / numbers.length).toFixed(2)}`);
            } else {
                console.log("Danh sách rỗng, không thể tính trung bình.");
            }
        }

        if (choice === "3") {
            let evenNumbers = numbers.filter(num => num % 2 === 0);
            if (evenNumbers.length > 0) {
                let maxEven = Math.max(...evenNumbers);
                console.log(`Số chẵn lớn nhất: ${maxEven}`);
            } else {
                console.log("Không có số chẵn trong danh sách.");
            }
        }

        if (choice === "4") {
            let oddNumbers = numbers.filter(num => num % 2 !== 0);
            if (oddNumbers.length > 0) {
                let minOdd = Math.min(...oddNumbers);
                console.log(`Số lẻ nhỏ nhất: ${minOdd}`);
            } else {
                console.log("Không có số lẻ trong danh sách.");
            }
        }

        if (choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4") {
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    }
}

// Hàm kiểm tra số nguyên hợp lệ
function isValidInteger(str) {
    let trimmedStr = str.trim();
    let num = Number(trimmedStr);
    return (trimmedStr.length > 0 && isNaN(num) === false && Number.isInteger(num) && num > 0);
}

integerProcessing();
