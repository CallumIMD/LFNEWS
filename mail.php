<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
exit();
}
if ($email === ''){
print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
exit();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
exit();
}
}
if ($subject === ''){
print json_encode(array('message' => 'Subject cannot be empty', 'code' => 0));
exit();
}
if ($message === ''){
print json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
exit();
}


$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "carville-c3@ulster.ac.uk";
$mailheader = "From: $email \r\n";
$mailheader .= "MIME-Version: 1.0" . "\r\n";
$mailheader .= "Content-type:text/html;charset=UTF-8" . "\r\n";

//mail($recipient, $subject, $content, $mailheader) or die("Error!");

$data       = array(
    'to' => 'carville-c3@ulster.ac.uk',
    'subject' => $subject,
    'message' => $content,
    'headers' => $mailheader
);
$url        = 'http://scmserv3.scm.ulster.ac.uk/web/B00730222/postemail.php';
$ch         = curl_init($url);
$postString = http_build_query($data, '', '&');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
?>