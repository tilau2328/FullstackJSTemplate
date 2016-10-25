/* global angular */
function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/',
        views: {
            'header': {
                templateUrl : '/static/js/app/views/header.html'
            },
            'content': {
                templateUrl : '/static/js/app/views/main.html'
            },
            'footer': {
                templateUrl : '/static/js/app/views/footer.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}

angular.module('jftApp').config(['$stateProvider', '$urlRouterProvider', AppConfig]);
