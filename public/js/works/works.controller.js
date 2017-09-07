'use strict';

angular
    .module('portfolio')
        .controller('WorksController', ['$scope', '$http', function($scope, $http) {
            // GET about.template.html required data
            $http
                .get('/api/works')
                .then(function(res) {
                    $scope.datas = res.data;
                });

        }]);