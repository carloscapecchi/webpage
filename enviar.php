<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

$mail = new PHPMailer(true);

try {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $teléfono = $_POST['teléfono'];
    $mensaje = $_POST['mensaje'];

    // CONFIGURACIÓN SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = '...';
    $mail->Password = '...';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // REMITENTE Y DESTINO
    $mail->setFrom('...', 'Web Carlos Capecchi');
    $mail->addAddress('...');
    $mail->addReplyTo($email, $nombre);

    // CONTENIDO
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje desde tu web';
    $mail->Body = "
        <h3>Nuevo mensaje</h3>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Teléfono:</strong> $teléfono</p>
        <p><strong>Mensaje:</strong><br>$mensaje</p>
    ";

    $mail->send();
    echo "Mensaje enviado correctamente";

} catch (Exception $e) {
    echo "Error al enviar: {$mail->ErrorInfo}";
}