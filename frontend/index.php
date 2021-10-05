<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/section/SectionCreator.php';
require __DIR__ . '/utils/SendEmail.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    new SectionCreator('landing', 'assets/mocks/work.json', 'index.twig', false);
});

$router->get('/about', function() {
    new SectionCreator('about black', 'assets/mocks/about.json', 'about.twig', false);
});

$router->get('/directors', function() {
    new SectionCreator('directors', 'assets/mocks/directors.json', 'directors.twig', true);
});

$router->get('/director/{directorSlug}', function($directorSlug) {
    new SectionCreator('directors-detail black', 'assets/mocks/directors-detail.json', 'directors-detail.twig', false);
});

$router->get('/work/{workSlug}', function($workSlug) {
    new SectionCreator('detail black', 'assets/mocks/detail.json', 'detail.twig', false);
});

$router->post('/mail-contact', function() {
    $sendEmail = new SendEmail();
    echo 'hola';
});

$router->run();
?>