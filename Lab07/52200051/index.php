<?php
session_start();
// Redirect to login if not logged in
if (!isset($_SESSION['logged_in'])) {
    header('Location: login.html');

    exit();
}
