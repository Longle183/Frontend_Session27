function studentManagement() {
    let students = [];

    while (true) {
        console.log("\n===== MENU QUẢN LÝ SINH VIÊN =====");
        console.log("1. Nhập danh sách sinh viên");
        console.log("2. Hiển thị danh sách sinh viên");
        console.log("3. Tìm sinh viên theo tên");
        console.log("4. Xóa sinh viên khỏi danh sách");
        console.log("5. Thoát");

        let choice = prompt("Chọn chức năng (1-5):");

        switch (choice) {
            case "1":
                let count = prompt("Nhập số lượng sinh viên:");
                if (!isValidNumber(count)) {
                    console.log("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên.");
                    continue;
                }
                count = Number(count);
                for (let i = 0; i < count; i++) {
                    let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();
                    if (name) {
                        students.push(name);
                    } else {
                        console.log("Tên sinh viên không được để trống.");
                        i--;
                    }
                }
                console.log("Nhập danh sách sinh viên thành công!");
                break;

            case "2":
                if (students.length === 0) {
                    console.log("Danh sách sinh viên trống.");
                } else {
                    console.log("Danh sách sinh viên:");
                    students.forEach((student, index) => console.log(`${index + 1}. ${student}`));
                }
                break;

            case "3":
                let searchName = prompt("Nhập tên sinh viên cần tìm:").trim();
                let foundStudent = students.find(student => student.toLowerCase() === searchName.toLowerCase());

                if (foundStudent) {
                    console.log(`Sinh viên tìm thấy: ${foundStudent}`);
                } else {
                    console.log("Sinh viên không có trong danh sách.");
                }
                break;

            case "4":
                let deleteName = prompt("Nhập tên sinh viên cần xóa:").trim();
                let index = students.findIndex(student => student.toLowerCase() === deleteName.toLowerCase());

                if (index !== -1) {
                    console.log(`Đã xóa sinh viên: ${students[index]}`);
                    students.splice(index, 1);
                } else {
                    console.log("Sinh viên không có trong danh sách.");
                }
                break;

            case "5":
                console.log("Thoát chương trình.");
                return;

            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    }
}

// Hàm kiểm tra xem input có phải là số nguyên hợp lệ không
function isValidNumber(str) {
    return str.trim() !== "" && !isNaN(str) && Number.isInteger(Number(str)) && Number(str) > 0;
}

// Gọi hàm để chạy chương trình
studentManagement();
