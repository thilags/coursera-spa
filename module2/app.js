(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var buy = this;
        buy.buyItems = ShoppingListCheckOffService.getItemstoBuy();
        buy.removeItem = function (index) {
                ShoppingListCheckOffService.removeItem(index);
            }
        }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.boughtItems = ShoppingListCheckOffService.getItemsBought();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var buyItems = [{ name: 'mangos', quantity: 3 },
        { name: 'apples', quantity: 2 }, { name: 'avocados', quantity: 3 }, { name: 'bananas', quantity: 8 }];

        var boughtItems = [];

        service.getItemstoBuy = function () {
            return buyItems;
        }

        service.getItemsBought = function () {
            return boughtItems;
        };

        service.removeItem = function (index) {
            var removedItem = buyItems[index];
            buyItems.splice(index, 1);
            boughtItems.push(removedItem);

        };
    }


})();