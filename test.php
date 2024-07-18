<?php
declare(strict_types=1);
// Include the PHPMailer and Dotenv libraries
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Configuration
$hostname = getenv('IMAP_HOST');
$username = getenv('IMAP_USERNAME');
$password = getenv('IMAP_PASSWORD');
$smtpHost = getenv('SMTP_HOST');
$smtpUser = getenv('SMTP_USERNAME');
$smtpPass = getenv('SMTP_PASSWORD');
$smtpPort = getenv('SMTP_PORT');
$to = getenv('MAIL_TO');

// Calculate yesterday's date
//$yesterday = date('d-M-Y', strtotime('-1 day'));

// Connect to the IMAP server
$hostname = 'mail.hostliner.cz';
$inbox = imap_open($hostname, $username, $password) or die('Cannot connect to IMAP: ' . imap_last_error());

// // Search emails from yesterday
// $searchCriteria = "ON \"$yesterday\"";
// $emails = imap_search($inbox, $searchCriteria);

// if ($emails) {
//     // Sort emails by date in descending order
//     rsort($emails);

//     foreach ($emails as $email_number) {
//         // Fetch the email overview and body
//         //$overview = imap_fetch_overview($inbox, $email_number, 0)[0];
//         //$message = imap_fetchbody($inbox, $email_number, '1');

//         // Forward the email
//         //forwardEmail($smtpHost, $smtpUser, $smtpPass, $smtpPort, $to, $overview->subject, $message);
//     }
// }

// Close the IMAP connection
//imap_close($inbox);

// function forwardEmail($smtpHost, $smtpUser, $smtpPass, $smtpPort, $to, $subject, $body) {
//     $mail = new PHPMailer(true);

//     try {
//         // Server settings
//         $mail->isSMTP();
//         $mail->Host = $smtpHost;
//         $mail->SMTPAuth = true;
//         $mail->Username = $smtpUser;
//         $mail->Password = $smtpPass;
//         $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
//         $mail->Port = $smtpPort;
//         $mail->CharSet = 'UTF-8';

//         // Recipients
//         $mail->setFrom($smtpUser, 'Malufi');
//         $mail->addAddress($to);

//         // Content
//         $mail->isHTML(true);
//         $mail->Subject = $subject;
//         $mail->Body    = $body;

//         // Send the email
//         $mail->send();
//         echo "Message has been sent to $to<br>";
//     } catch (Exception $e) {
//         echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}<br>";
//     }
// }
