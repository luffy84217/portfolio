'use strict';

angular
	.module('portfolio')
		.controller('AboutController', ['$scope', '$http', function($scope, $http) {
			// GET about.template.html required data
            $http
				.get('/api/about')
				.then(function(res) {
					$scope.data = res.data;
				});
            // initialize tabs to add them dynamically, avoid route changing issue
            $(document).ready(function() {
                $('ul.tabs').tabs();
            });

		}]);