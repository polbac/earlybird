<?php
require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/section/SectionCreator.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    new SectionCreator('landing', NULL, 'index.twig');
});

$router->get('/works', function() {
    new SectionCreator('works', 'sculptures?_limit=10000&_page=1', 'works.twig');
});

$router->run();
?>