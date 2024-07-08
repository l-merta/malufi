<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);

  echo "Nazdar $name, máš mejl $email";
} else {
  echo "Invalid request method.";
}
?>
