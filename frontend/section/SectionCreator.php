<?php

use GuzzleHttp\Client;

class SectionCreator{
    function __construct($sectionName, $endpoint, $template) {
        $loader = new \Twig\Loader\FilesystemLoader(realpath($_SERVER["DOCUMENT_ROOT"]) . '/frontend/templates');
        $twig = new \Twig\Environment($loader);
        $twig->addGlobal('is_dev', $_SERVER["SERVER_NAME"] === "localhost");
        $twig->addGlobal('initPath', "/frontend");

        $client = new GuzzleHttp\Client([
            'base_uri' => 'http://localhost:8888/frontend/'
        ]);

        $body = [];
        
        if ($endpoint) {
            $response =  $client->request('GET', $endpoint);
            $body = $response->getBody();
            $body = json_decode($body);
        }
        
        echo $twig->render($template, [
            'sectionName' => $sectionName,
            'data' => $body,
        ]);
    }
}
?>