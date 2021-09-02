<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/section/SectionCreator.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    new SectionCreator('example', 'sculptures?_limit=10000&_page=1', 'index.twig');
});

$router->run();
?>