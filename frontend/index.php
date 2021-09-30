<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/section/SectionCreator.php';
require __DIR__ . '/utils/SendEmail.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    new SectionCreator('landing', 'assets/mocks/work.json', 'index.twig');
});

$router->get('/about', function() {
    new SectionCreator('about black', 'assets/mocks/about.json', 'about.twig');
});

$router->get('/work/{workSlug}', function($workSlug) {
    new SectionCreator('detail black', 'assets/mocks/detail.json', 'detail.twig');
});

$router->post('/mail-contact', function() {
    $sendEmail = new SendEmail();
    echo 'hola';
});

$router->run();
?>