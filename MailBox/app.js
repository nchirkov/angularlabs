  angular.module('mailBoxApp', [])
      .service('MailService', function($http) {
          this.get = () => {
              return $http.get('http://test-api.javascript.ru/v1/nchirkov/letters')
                  .then(response => response.data)
          }
      })
      .component('mailitem', {
          bindings: {
              item: '<'
          },
          templateUrl: 'mailItem.tpl.html'
      })
      .component('maildata', {
          controller: function(MailService) {
              MailService.get().then(items => this.items = items);
          },
          templateUrl: 'maildata.tpl.html'
      });
