angular.module('cardApp', [])
    .directive('usercard', function() {
        return {
            restrict: 'E',
            templateUrl: 'usercard.tpl.html',
        }

    })
    .directive('userdata', function() {
        return {
            restrict: 'A',
            link: function(scope) {
                scope.users = [{
                    "id": 1,
                    "fullName": "Иванов Иван",
                    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
                    "birthdate": "1976-10-10",
                    "gender": "мужской",
                    "address": "ул. Звенигороская, 47б",
                    "email": "ivanov@mail.ru"
                }, {
                    "id": 2,
                    "fullName": "Петров Петр",
                    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
                    "birthdate": "1957-01-14",
                    "gender": "мужской",
                    "address": "ул.Пушкиская, 13",
                    "email": "ivanov@mail.ru"
                }, {
                    "id": 3,
                    "fullName": "Натальина Наталья",
                    "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
                    "birthdate": "1990-07-03",
                    "gender": "женский",
                    "address": "ул. Лермонтова, 59",
                    "email": "ivanov@mail.ru"
                }];
            }
        }
    });
