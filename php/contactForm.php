<?php
declare(strict_types=1);
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable('../');
$dotenv->load();

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
    $mail->isSMTP();                                          // Set mailer to use SMTP
    $mail->Host       = $_ENV['SMTP_HOST'];                   // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                 // Enable SMTP authentication
    $mail->Username   = $_ENV['SMTP_USERNAME'];               // SMTP username
    $mail->Password   = $_ENV['SMTP_PASSWORD'];               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          // Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = $_ENV['SMTP_PORT'];                   // TCP port to connect to
    $mail->CharSet    = 'UTF-8';                              // Set charset to UTF-8

    // Recipients
    $mail->setFrom($email, 'MALUFI zákazník');
    $mail->addAddress($_ENV['MAIL_TO'], 'Recipient');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Nový zákazník odeslal kontaktní formulář';
    $mail->Body    = nl2br("Jméno: $name\nEmail: $email\nTelefon: $phone\nCenový plán: $pricePlan\nZpráva: $message");

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => "Zpráva nebyla odeslána. Chyba: {$mail->ErrorInfo}"]);
}

