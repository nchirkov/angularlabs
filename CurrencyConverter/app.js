angular.module('currencyConverterApp', [])
    .service('ConverterService', function() {
        let rates = {
            "USD": {
                "RUB": 63,
                "USD": 1,
                "EUR": 1 / 1.11977
            },
            "RUB": {
                "RUB": 1,
                "USD": 1 / 63,
                "EUR": 1 / 70
            },
            "EUR": {
                "RUB": 70,
                "USD": 1.11977,
                "EUR": 1
            }
        };

        this.convert = (fromAmount, fromCurrency, toCurrency) => {
            return fromAmount * rates[fromCurrency][toCurrency];
        }
    })
    .component('converter', {
        controller: function(ConverterService) {
            this.convert = () => {
                this.toAmount = ConverterService.convert(this.fromAmount, this.fromCurrency, this.toCurrency);
            };
        },
        templateUrl: 'converter.tpl.html'
    });
