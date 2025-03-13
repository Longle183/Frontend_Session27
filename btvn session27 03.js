function geometryCalculator() {
    while (true) {
        console.log("\n===== MENU TÍNH TOÁN HÌNH HỌC =====");
        console.log("1. Tính diện tích hình tròn");
        console.log("2. Tính chu vi hình tròn");
        console.log("3. Tính diện tích hình chữ nhật");
        console.log("4. Tính chu vi hình chữ nhật");
        console.log("5. Thoát");

        let choice = prompt("Chọn chức năng (1-5):");

        if (choice === "5") {
            console.log("Thoát chương trình.");
            return;
        }

        if (choice === "1" || choice === "2") {
            let radius = prompt("Nhập bán kính hình tròn:");
            if (isValidNumber(radius)) {
                let r = Number(radius);
                if (choice === "1") {
                    console.log(`Diện tích hình tròn: ${(Math.PI * r * r).toFixed(2)}`);
                } else {
                    console.log(`Chu vi hình tròn: ${(2 * Math.PI * r).toFixed(2)}`);
                }
            } else {
                console.log("Dữ liệu không hợp lệ. Vui lòng nhập số dương.");
            }
        } 

        if (choice === "3" || choice === "4") {
            let length = prompt("Nhập chiều dài hình chữ nhật:");
            let width = prompt("Nhập chiều rộng hình chữ nhật:");
            
            if (isValidNumber(length) && isValidNumber(width)) {
                let l = Number(length);
                let w = Number(width);
                if (choice === "3") {
                    console.log(`Diện tích hình chữ nhật: ${(l * w).toFixed(2)}`);
                } else {
                    console.log(`Chu vi hình chữ nhật: ${(2 * (l + w)).toFixed(2)}`);
                }
            } else {
                console.log("Dữ liệu không hợp lệ. Vui lòng nhập số dương.");
            }
        }

        if (choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4") {
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    }
}

// Hàm kiểm tra số hợp lệ
function isValidNumber(str) {
    let trimmedStr = str.trim();
    let num = Number(trimmedStr);
    return (trimmedStr.length > 0 && !isNaN(num) && num > 0);
}

geometryCalculator();
