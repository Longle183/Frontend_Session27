function calculatorMenu() {
    while (true) {
        console.log("\n===== MENU TÍNH TOÁN =====");
        console.log("1. Cộng hai số");
        console.log("2. Trừ hai số");
        console.log("3. Nhân hai số");
        console.log("4. Chia hai số");
        console.log("5. Thoát");

        let choice = prompt("Chọn chức năng (1-5):");

        if (choice === "5") {
            console.log("Thoát chương trình.");
            break;
        }

        let num1 = prompt("Nhập số thứ nhất:");
        let num2 = prompt("Nhập số thứ hai:");

        // Kiểm tra xem input có phải là số hợp lệ không
        if (!isValidNumber(num1) || !isValidNumber(num2)) {
            console.log("Dữ liệu không hợp lệ. Vui lòng nhập số.");
            continue;
        }

        // Chuyển đổi thành số nguyên hoặc số thực
        num1 = Number(num1);
        num2 = Number(num2);

        switch (choice) {
            case "1":
                console.log(`Kết quả: ${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "2":
                console.log(`Kết quả: ${num1} - ${num2} = ${num1 - num2}`);
                break;
            case "3":
                console.log(`Kết quả: ${num1} × ${num2} = ${num1 * num2}`);
                break;
            case "4":
                if (num2 === 0) {
                    console.log("Lỗi: Không thể chia cho 0.");
                } else {
                    console.log(`Kết quả: ${num1} ÷ ${num2} = ${num1 / num2}`);
                }
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    }
}

// Hàm kiểm tra xem chuỗi có phải là số hợp lệ không
function isValidNumber(str) {
    if (str.trim() === "") return false; // Không được để trống
    return !isNaN(str) && isFinite(str); // Kiểm tra xem có phải số hợp lệ không
}

calculatorMenu();
