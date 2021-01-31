<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (isset($_POST['recaptcha'])) {
  $captcha = $_POST['recaptcha'];
  $privatekey = "6LdUDtkZAAAAAPuURG27zURtPX2cIBdup6pQA4mi";
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = array(
    'secret' => $privatekey,
    'response' => $captcha,
    'remoteip' => $_SERVER['REMOTE_ADDR']
  );

  $curlConfig = array(
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $data
  );

  $ch = curl_init();
  curl_setopt_array($ch, $curlConfig);
  $response = curl_exec($ch);
  curl_close($ch);
}

$jsonResponse = json_decode($response);

if ($jsonResponse->success === true) {

  $errors = array();
  if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (empty($_POST['email'])) {
      $errors[] = 'Email is empty';
    } else {
      $email = $_POST['email'];

      // validating the email
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
      }
    }
    if (empty($_POST['message'])) {
      $errors[] = 'Message is empty';
    } else {
      $message = $_POST['message'];
    }
    if (empty($errors)) {
      $date = date('j, F Y h:i A');
      $name = $_POST['fname'];
      $emailBody = "
    <html>
    <head>
    <title>$name is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

      $headers =   'From: Guarapo Media <contacto@guarapomedia.com>' . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=iso-8859-1\r\n";

      $to = 'mazzariolwalter@gmail.com';
      $subject = 'Guarapo Media (' . $name . ')';

      if (mail($to, $subject, $emailBody, $headers)) {
        $sent = true;
      }
    }
  }
} else { ?>
  {
  "status": "fail",
  "error": "Valida el recaptcha"
  }
<?php }
?>

<?php if (!empty($errors)) : ?>

  {
  "status": "fail",
  "error": "Email o mensaje esta vacío"
  }
<?php endif; ?>


<?php if (isset($sent) && $sent === true) : ?>

  {
  "status": "success",
  "message": "Your data was successfully submitted",
  "sent": "true"
  }
<?php endif; ?>