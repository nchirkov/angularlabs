angular.module('cardApp', [])
    .service('UserService', function($http) {
        this.get = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/users')
                .then(response => response.data)
        }
    })
    .component('usercard', {
        bindings: {
            user: '<'
        },
        templateUrl: 'usercard.tpl.html'
    })
    .component('userdata', {
        controller: function(UserService) {
            UserService.get().then(users => this.users = users);
        },
        templateUrl: 'userdata.tpl.html'
    });
