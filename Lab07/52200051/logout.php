<?php
session_start();
session_destroy(); // Destroy the session to log out
header('Refresh: 10; URL=login.html'); // Redirect after 10 seconds
