<?php

  $receiving_email_address = 'mr.naikwadi2908@gmail.com';

  if( file_exists($contact = 'C:\Users\swapnil\Desktop\web intership\Damsole-technologies\swapnilnaikwadi\forms' )) {
    include( $contact );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new contact.php;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  
  $contact->smtp = array(
    'host' => 'mr.naikwadi2908@gmail.com',
    'username' => 'swapnil',
    'password' => 'pass',
    'port' => '587'
  );
 

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
