<?php
include ("connectcontact.php");
if(empty($_POST["userName"]) || empty($_POST["subject"]) || empty($_POST["content"]) || !filter_var($_POST["userEmail"], FILTER_VALIDATE_EMAIL)) {
require_once('submit.html');
  exit();
  
}
function strip_crlf($string)
{
    return str_replace("\r\n", "", $string);
}
//echo(" succes,,,,,,,,");
$name = $_POST["userName"];
$email = $_POST["userEmail"];
$subject = $_POST["subject"];
$content = $_POST["content"];

$toEmail = "contact@greatdreamacademy.com";
    // CRLF Injection attack protection
    $name = strip_crlf($name);
    $email = strip_crlf($email);
    if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "The email address is invalid.";
    } else {
        // appending \r\n at the end of mailheaders for end
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        if (mail($toEmail, $subject, $content, $mailHeaders)) {
            $message = "Your contact information is received successfully.";
            $type = "success";
            echo $message;
        } echo error_get_last();
  // http_response_code(500);
      }
?>
