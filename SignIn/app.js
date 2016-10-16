angular.module('signInApp', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                component: 'user',
                resolve: {
                    isAuthenticated: function(SignInService) {
                        return SignInService.isAuthenticated();
                    }
                }
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
    })
    .service('SignInService', function() {
        let isAuthenticated = false;

        this.authenticate = (email, password) => {
            if (email === 'test@test.ru' && password === '123') {
                isAuthenticated = true;
            } else {
                isAuthenticated = false;
            }
        };

        this.isAuthenticated = () => {
            return isAuthenticated;
        };
    })
    .component('login', {
        controller: function(SignInService) {
            this.authenticate = () => SignInService.authenticate(this.email, this.password);
        },
        templateUrl: 'login.tpl.html'
    })
    .component('user', {
        bindings: {
            isAuthenticated: '<'
        },
        templateUrl: 'user.tpl.html'
    });
