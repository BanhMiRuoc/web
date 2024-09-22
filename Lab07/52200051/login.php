<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $username = $_GET['username'];
    $password = $_GET['password'];

    if ($username == 'admin' && $password == '123') {
        $_SESSION['logged_in'] = true;
        // Set cookies if 'Remember Me' is checked
        if (isset($_GET['remember'])) {
            setcookie('username', $username, time() + (86400 * 30)); // 30 days
            setcookie('password', $password, time() + (86400 * 30)); // 30 days
        }
        header('Location: home.php');
        exit();
    } else {
        $error_message = 'Invalid username or password';
    }
}
