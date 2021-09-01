<?php
require __DIR__ . '/vendor/autoload.php';
use GuzzleHttp\Client;

$__IS_DEV__ = $_SERVER['SERVER_NAME'] === 'localhost';

$twigLoader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
$twig = new \Twig\Environment($twigLoader);
$twig->addGlobal('is_dev', $__IS_DEV__);

$router = new \Bramus\Router\Router();

$router->get('/', function() use ($twig){
    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'https://jsonplaceholder.typicode.com',
        // You can set any number of default request options.
        'timeout'  => 2.0,
    ]);
    $response = $client->request('GET', '/todos');
    var_dump($response);
    echo $twig->render('index.twig', ['text' => 'Hola mundo!']);
});

$router->run();
?>