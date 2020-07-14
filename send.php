<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username = 'no-reply@gridstudio.ru'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
    $mail->Password = 'iCd9D6mRR59j4VuJ'; // Ваш пароль
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('no-reply@gridstudio.ru'); // Ваш Email

    // Получатель письма
    $mail->addAddress('pdv@apimedia.ru');
//    $mail->addAddress('teh@apimedia.ru');

    $message = "Маркетинговое агенство Метод"."<br />";
    if (isset($_POST['title'])) {
        $message .= "Форма: ".$_POST['title']."<br />";
    }
    if (isset($_POST['name'])) {
        $message .= "Имя: ".$_POST['name']."<br />";
    }
    if (isset($_POST['phone'])) {
        $message .= "Телефон: ".$_POST['phone']."<br />";
    }
    if (isset($_POST['comment'])) {
        $message .= "Комментарий: ".$_POST['comment']."<br />";
    }

// Письмо
    $mail->isHTML(true);
    $mail->Subject = "Маркетинговое агенство Метод"; // Заголовок письма
    $mail->Body = $message; // Текст письма
    $mail->CharSet = "utf-8";

// Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";}
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result]);