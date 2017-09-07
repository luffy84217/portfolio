'use strict';

angular
    .module('portfolio')
        .config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider
                    .when('/about', {
                        title: 'About',
                        templateUrl: 'js/about/about.template.html',
                        controller: 'AboutController'
                    })
                    .when('/works', {
                        title: 'Works',
                        templateUrl: 'js/works/works.template.html',
                        controller: 'WorksController'
                    })
                    .when('/contact', {
                        title: 'Contact',
                        templateUrl: 'js/contact/contact.template.html',
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
