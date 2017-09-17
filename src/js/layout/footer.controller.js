'use strict';

angular
    .module('portfolio')
        .controller('FooterController', ['$scope', '$http', function($scope, $http) {
            // GET about.template.html required data
            $http
                .get('/api/footer')
                .then(function(res) {
                    $scope.data = res.data;
                });

        }]);