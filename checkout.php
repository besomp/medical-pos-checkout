<?php
// Set content type to JSON
header('Content-Type: application/json');

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medical_pos";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Get POST data
$name = $_POST['name'];
$dob = $_POST['dob'];
$insurance = $_POST['insurance'];
$total = $_POST['total'];

// Prepare SQL query to insert transaction
$stmt = $conn->prepare("INSERT INTO transactions (name, dob, insurance, total) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $dob, $insurance, $total);

if ($stmt->execute()) {
    // Transaction successful, send response
    echo json_encode(["status" => "success", "message" => "Transaction processed successfully"]);
} else {
    // Transaction failed
    echo json_encode(["status" => "error", "message" => "Transaction failed: " . $stmt->error]);
}

// Close the database connection
$stmt->close();
$conn->close();
?>
