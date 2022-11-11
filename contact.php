<?php
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message']; 
	
	$mailTo = "idickenson2@huskers.unl.edu";
	$headers = "From: ".$mailFrom;
	$txt = "You have recieved an e-mail from ".$name.".\n\n".$message;
	
	mail($mailTo, $message, $headers);
	header("Location: success.html");
}
?>