import observableModule = require("data/observable");
import productModel = require("../../shared/models/product");
import productsList = require("../../shared/models/globalList");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import imageModule = require("ui/image");
import listViewModule = require("ui/list-view");


var page: any;
var pageData = new observableModule.Observable({
    productsList: productsList
});
var productListView: any;

export function pageNavigatingTo(args: observableModule.EventData) {

    console.log("navigating to list");
    page = <pages.Page>args.object;
    page.bindingContext = pageData;
    productListView = page.getViewById("productsListView");

    var product = new productModel();
    product.name = page.navigationContext.name;
    product.price = page.navigationContext.price;
    product.image = page.navigationContext.image;

    productsList.push(product);
    productListView = page.getViewById("productsListView");
    productListView.on(listViewModule.ListView.itemLoadingEvent, function(args) {

        var image = args.view.getViewById("image");

        image.on(viewModule.View.loadedEvent, function(args: observableModule.EventData) {

            (<viewModule.View>args.object).translateX = -1000;
            (<viewModule.View>args.object).animate({ translate: { x: 0, y: 0 }, opacity: 1 });

        });
        // image.on(listViewModule.ListView.loadMoreItemsEvent, function (args: observableModule.EventData) {
        //   (<viewModule.View>args.object).animate({ translate: { x: 0, y: 0 }, opacity: 1 });
        //   });
    });

}
