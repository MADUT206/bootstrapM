<?php
    // if (! empty($name)) {
    $name = $_POST["signupName"];
    $email = $_POST["signupEmail"];
    // echo $name." - ".$email;
    if(function_exists('date_default_timezone_set')) {
        date_default_timezone_set("Asia/Kolkata");
    }
    function strip_crlf($string)
    {
        return str_replace("\r\n", "", $string);
    }
    $date=date("Y-m-d H:i:s");
    $conn = mysqli_connect("localhost", "client", "Client-Get-User", "Spectrum") or die("Connection Error: " . mysqli_error($conn));
    $stmt = $conn->prepare("INSERT INTO signuptap (user_name, user_email, c_date) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $date);
    $stmt->execute();
    $message = "Your contact information is saved successfully.";
    $type = "success";
    
    $toEmail = "newsletter@spectrumtreerealty.co.ke";
    // CRLF Injection attack protection
    $name = strip_crlf($name);
    $email = strip_crlf($email);
    $subject='New signup Subscription';
    $content="\n\r"." A new subscription is available";
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
      $stmt->close();
    $conn->close();
//require_once "submit.html";
?>