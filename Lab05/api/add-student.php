<?php
    require_once ('connection.php');

    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['phone'])) {
        die(json_encode(array('status' => false, 'data' => 'Parameters not valid')));
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = 'INSERT INTO student(name,email,phone) VALUES(?,?,?)';

    try{
        $stmt = $dbCon->prepare($sql);
        $stmt->execute(array($name,$email,$phone));

        echo json_encode(array('status' => true, 'data' => 'Thêm sinh viên thành công'));
    }
    catch(PDOException $ex){
        die(json_encode(array('status' => false, 'data' => $ex->getMessage())));
    }



?>