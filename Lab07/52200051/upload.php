<?php
require_once('connection.php');

// This will help in returning a JSON response
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];

    // File properties
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];

    // Check for errors
    if ($fileError === 0) {
        // Read the file content
        $fileData = file_get_contents($fileTmpName);

        // Prepare the SQL statement
        $sql = "INSERT INTO files (name, mime_type, size, data) VALUES (?, ?, ?, ?)";
        $stmt = $dbCon->prepare($sql);

        // Bind the parameters
        $stmt->bindParam(1, $fileName);
        $stmt->bindParam(2, $fileType);
        $stmt->bindParam(3, $fileSize);
        $stmt->bindParam(4, $fileData, PDO::PARAM_LOB);

        // Execute the statement and check if it's successful
        if ($stmt->execute()) {
            http_response_code(200); // OK
            echo json_encode(['message' => 'File uploaded successfully.']);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(['message' => 'Failed to upload file.']);
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(['message' => 'Error uploading file.']);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['message' => 'Method not allowed. Please use POST method.']);
}
