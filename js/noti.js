const names = ["NGUYỄN ĐỖ TƯỜNG VÂN", "ĐÀO XUÂN ĐINH",
    "NGUYỄN NGỌC DUNG",
    "DƯƠNG TRUNG NGUYỆT",
    "VƯƠNG KIỀU LOAN",
    "ĐOÀN THANH SANG",
    "NGUYỄN VĂN THẮNG",
    "NGUYỄN THỊ ÁNH TUYẾT",
    "VŨ THỊ THẢO NGUYÊN",
    "Trương Quang Cang",
    "Bùi Thị Hồng Oanh",
    "NGUYỄN THANH SƠN",
    "Nguyễn Thái Hưng",
    "TRÀ THANH HẬU",
    "TẠ VĨNH LỘC",
    "Bùi Thị Dịu",
    "Lê Công Hòa",
    "Phạm Đức Thiện",
    "Võ Đình Quang",
    "Phan Thị Hòang Mai",
    "Trần Nữ Anh Thư",
    "Trần Minh Trí",
    "Đỗ Viết Phương",
    "Nguyễn Việt Minh Châu",
    "Hồ Sỹ Quý",
    "Lê Đại Phong",
    "PHAN THỊ NGỌC ĐIỆP",
    "NGUYỄN KHÁNH",
    "Trần Kim Hiếu",
    "Nguyễn Thị Vi",
    "TRẦN VINH QUANG",
    "NGUYỄN THỊ ĐẶNG",
    "LÊ QUANG LẬP",
    "Nguyễn Đức Thọ",
    "Lê Văn Dũng",
    "Lê Huy Ngọc",
    "Lê Bá Thắng",
    "DƯƠNG THỊ DIỄM MY"];
let currentIndex = 0;

function showNotification() {
    const notification = document.getElementById('notification');
    // Cập nhật nội dung thông báo với tên tiếp theo
    notification.textContent = `${names[currentIndex]} vừa đăng ký thành công`;
    notification.classList.remove('hidden');

    setTimeout(function() {
        notification.classList.add('opacity-100');
    }, 10);

    setTimeout(function() {
        notification.classList.remove('opacity-100');
        setTimeout(function() {
            notification.classList.add('hidden');
            // Cập nhật currentIndex để sử dụng tên tiếp theo
            currentIndex = (currentIndex + 1) % names.length;
        }, 500);
    }, 5000);
}
setInterval(showNotification, 15000 + 5000 + 500);