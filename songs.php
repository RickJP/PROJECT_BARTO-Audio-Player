<?php
$file = "demo.mp3";
header("Content-Type:audio/mpeg");
header("Content-LEngth:".filesize($file));
readfile($file);
?>