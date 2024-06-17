<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "127.0.0.1";
$username = "root";
$password = "123456";
$dbname = "landing";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Lấy dữ liệu từ form
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$sex = $_POST['sex'];
$birth = $_POST['birth'];
$cty = $_POST['cty'];

// Câu lệnh SQL để chèn dữ liệu
$sql = "INSERT INTO application_form (name, phone, address, sex, birth, cty)
VALUES ('$name', '$phone', '$address', '$sex', '$birth', '$cty')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error inserting record: " . $conn->error;
}

$conn->close();
?>