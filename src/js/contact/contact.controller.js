'use strict';

angular
    .module('portfolio')
        .controller('ContactController', ['$scope', '$http', function($scope, $http) {
            
            $scope.name = '';
            $scope.email = '';
            $scope.message = '';

            $scope.sendMail = function() {

                $('button').addClass('disabled');

                $http
                    .post('/api/sendMail',{
                        name: $scope.name,
                        email: $scope.email,
                        message: $scope.message
                    })
                    .then(function(res) {

                        if (res.data.success) {
                            Materialize.toast("Message has been sent successfully, thank you.", 4000, 'rounded green');
                        } else {
                            Materialize.toast("Sorry, there's something wrong with server, please come back later.", 4000, 'rounded amber black-text');
                        }
                        $('button').removeClass('disabled');

                    });

            };
        }]);