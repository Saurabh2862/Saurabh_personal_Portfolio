<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set the recipient email address
    $to = "saurabhpandey5794@gmail.com";
    
    // Set the email subject
    $subject = "New message from $name";
    
    // Set the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";
    
    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        // Email sending failed
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: /your-form-page.html");
    exit;
}
?>
