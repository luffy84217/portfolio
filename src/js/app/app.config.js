'use strict';

angular
    .module('portfolio')
        .config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider
                    .when('/about', {
                        title: 'About',
                        templateUrl: 'html/about.template.html',
                        controller: 'AboutController'
                    })
                    .when('/works', {
                        title: 'Works',
                        templateUrl: 'html/works.template.html',
                        controller: 'WorksController'
                    })
                    .when('/contact', {
                        title: 'Contact',
                        templateUrl: 'html/contact.template.html',
                        controller: 'ContactController'
                    })
                    .otherwise('/about');
            }
        ]);
    
angular
    .module('portfolio')
        .run(['$rootScope', function($rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
                $rootScope.title = current.$$route.title;
            });
        }]);
