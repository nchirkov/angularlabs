angular.module('currencyConverterApp', [])
    .service('ConverterService', function() {
        this.convert = (from) => {
            return from * 63
        }
    })
    .component('converter', {
        controller: function(ConverterService) {
            this.convert = () => {
                this.toAmount = ConverterService.convert(this.fromAmount);
            };
        },
        templateUrl: 'converter.tpl.html'
    });
