'use strict';

angular
    .module('portfolio')
        .controller('ToTheTopController', ['$window', '$scope', function($window, $scope) {
            // 
            $window.onscroll = function(event) {
                if (event.target.scrollingElement.scrollTop > 263) {
                    $('#to-the-top').addClass('active');
                } else {
                    $('#to-the-top').removeClass('active');
                }
            };

            $(document).ready(function(){
                $('.scrollspy').scrollSpy();
            });

        }]);