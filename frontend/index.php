<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/section/SectionCreator.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    new SectionCreator('example', 'todos', 'index.twig');
});

$router->run();
?>