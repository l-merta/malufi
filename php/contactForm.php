<?php
declare(strict_types=1);
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Použij POST debile xd']);
    exit;
}

// Validate and sanitize input
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') : null;
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : null;
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') : null;
$pricePlan = isset($_POST['pricePlan']) ? htmlspecialchars($_POST['pricePlan'], ENT_QUOTES, 'UTF-8') : null;
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8') : null;

if (!$name || !$email || !$pricePlan || !$message) {
    echo json_encode(['success' => false, 'error' => 'Data z formuláře nejsou validní. Vyplňte prostím všechna povinná pole.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'mail.hostliner.cz';                    // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@malufi.cz';                       // SMTP username
    $mail->Password   = '5puk7EiUzwP9';                         // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    // Recipients
    $mail->setFrom($email, 'MALUFI zákazník');
    $mail->addAddress('info@malufi.cz', 'Recipient');

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = 'Nový zákazník odeslal kontaktní formulář';
    $mail->Body    = nl2br("Jméno: $name\nEmail: $email\Telefon: $phone\nCenový plán: $pricePlan\nZpráva: $message");

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => "Zpráva nebyla odeslána. Chyba: {$mail->ErrorInfo}"]);
}

