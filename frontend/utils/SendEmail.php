<?php
class SendEmail{
    function __construct() {
        $body = json_decode(file_get_contents('php://input'), true);
    }
}
?>