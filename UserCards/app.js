angular.module('cardApp', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('users', {
            url: '/users',
            component: 'userlist',
            resolve: {
                userlist: function(UserService) {
                    return UserService.get();
                }
            }
        });
        $stateProvider.state('usercard', {
            url: '/users/{userId}',
            component: 'usercard',
            resolve: {
                user: function(UserService, $transition$) {
                    return UserService.getById($transition$.params().userId);
                }
            }
        })
    })
    .service('UserService', function($http) {
        this.get = () => {
            return $http.get('https://test-api.javascript.ru/v1/nchirkov/users')
                .then(response => response.data)
        }

        this.getById = (id) => {
              return $http.get('https://test-api.javascript.ru/v1/nchirkov/users/' + id)
                  .then(response => response.data)
        }
    })
    .component('usercard', {
        bindings: {
            user: '<'
        },
        templateUrl: 'usercard.tpl.html'
    })
    .component('userlist', {
        bindings: {
            userlist: '<'
        },
        templateUrl: 'userlist.tpl.html'
    });
