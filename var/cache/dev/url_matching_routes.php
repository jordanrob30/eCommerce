<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/users' => [[['_route' => 'users', '_controller' => 'App\\Controller\\DefaultController::getUsers'], null, null, null, false, false, null]],
        '/api/products/create' => [[['_route' => 'api_productsapi_products_create', '_controller' => 'App\\Controller\\ProductsController::createProduct'], null, ['POST' => 0], null, false, false, null]],
        '/api/products/read/all' => [[['_route' => 'api_productsapi_products_read_all', '_controller' => 'App\\Controller\\ProductsController::readProducts'], null, ['GET' => 0], null, true, false, null]],
        '/verify/email' => [[['_route' => 'app_verify_email', '_controller' => 'App\\Controller\\RegistrationController::verifyUserEmail'], null, null, null, false, false, null]],
        '/api/users/create' => [[['_route' => 'api_usersapi_users_create', '_controller' => 'App\\Controller\\UsersController::createUser'], null, ['POST' => 0], null, false, false, null]],
        '/api/users/read/all' => [[['_route' => 'api_usersapi_users_read_all', '_controller' => 'App\\Controller\\UsersController::readUsers'], null, ['GET' => 0], null, true, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/([^/]++)?(*:179)'
                .'|/api/(?'
                    .'|products/(?'
                        .'|read/all/id/([^/]++)(*:227)'
                        .'|update/([^/]++)/([^/]++)(*:259)'
                        .'|delete/([^/]++)(*:282)'
                    .')'
                    .'|users/(?'
                        .'|read/all/id/([^/]++)(*:320)'
                        .'|update/([^/]++)/([^/]++)(*:352)'
                        .'|delete/([^/]++)(*:375)'
                    .')'
                .')'
                .'|/register(*:394)'
                .'|/log(?'
                    .'|in(*:411)'
                    .'|out(*:422)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        179 => [[['_route' => 'home', 'reactRouting' => null, '_controller' => 'App\\Controller\\DefaultController::index'], ['reactRouting'], null, null, false, true, null]],
        227 => [[['_route' => 'api_productsapi_products_read', '_controller' => 'App\\Controller\\ProductsController::readProduct'], ['id'], ['GET' => 0], null, false, true, null]],
        259 => [[['_route' => 'api_productsapi_products_update', '_controller' => 'App\\Controller\\ProductsController::updateProduct'], ['field', 'id'], ['PUT' => 0], null, false, true, null]],
        282 => [[['_route' => 'api_productsapi_products_delete', '_controller' => 'App\\Controller\\ProductsController::deleteProduct'], ['id'], ['DELETE' => 0], null, false, true, null]],
        320 => [[['_route' => 'api_usersapi_users_read', '_controller' => 'App\\Controller\\UsersController::readUser'], ['id'], ['GET' => 0], null, false, true, null]],
        352 => [[['_route' => 'api_usersapi_users_update', '_controller' => 'App\\Controller\\UsersController::updateUser'], ['field', 'id'], ['PUT' => 0], null, false, true, null]],
        375 => [[['_route' => 'api_usersapi_users_delete', '_controller' => 'App\\Controller\\UsersController::deleteUser'], ['id'], ['DELETE' => 0], null, false, true, null]],
        394 => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], [], null, null, false, false, null]],
        411 => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], [], null, null, false, false, null]],
        422 => [
            [['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], [], null, null, false, false, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
