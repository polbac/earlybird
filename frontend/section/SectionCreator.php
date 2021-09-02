<?php

use GuzzleHttp\Client;

class SectionCreator{
    function __construct($sectionName, $endpoint, $template) {
        $loader = new \Twig\Loader\FilesystemLoader(realpath($_SERVER["DOCUMENT_ROOT"]) . '/templates');
        $twig = new \Twig\Environment($loader);
        $twig->addGlobal('is_dev', $_SERVER["SERVER_NAME"] === "localhost");

        $client = new GuzzleHttp\Client([
            'base_uri' => 'https://phpstack-184606-1536976.cloudwaysapps.com/unicx/custom/'
        ]);
        $response =  $client->request('GET', $endpoint);
        $body = $response->getBody();
        $body = json_decode($body);
        echo $twig->render($template, [
            'sectionName' => $sectionName,
            'data' => $body
        ]);
    }
}
?>