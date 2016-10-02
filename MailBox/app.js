  angular.module('mailBoxApp', [])
      .directive('mailitem', mailItem)
      .directive('maildata', mailData);

  function mailItem() {
      return {
          restrict: 'A',
          templateUrl: 'mailItem.tpl.html'
      }
  }

  function mailData() {
      return {
          restrict: 'A',
          link: function(scope) {
              scope.items = [{
                  "id": 1,
                  "from": "inbox@mail.ru",
                  "subject": "Регистрация на событие",
                  "date": "2015-04-23T18:25:43.511Z",
                  "content": "Вы только что зарегистрировались на событие. Подтверждаем, что Ваша регистрация прошла успешно."
              }, {
                  "id": 2,
                  "from": "welcome@gmail.com",
                  "subject": "Новое спецпредложение",
                  "date": "2016-04-23T17:22:43.511Z",
                  "content": "Покупайте билеты на любые фильмы через приложение."
              }, {
                  "id": 3,
                  "from": "list@facebook.com",
                  "subject": "Сегодня празднует день рождения Иван",
                  "date": "2016-10-01T18:25:43.511Z",
                  "content": "Иван отмечает свой день рождения 1 октября. Поздравьте!"
              }];
          }
      }
  }
