import observableModule = require("data/observable");
import productModel = require("../../shared/models/product");
import productsList = require("../../shared/models/globalList");
import pages = require("ui/page");
import viewModule = require("ui/core/view");
import imageModule = require("ui/image");
import listViewModule = require("ui/list-view");

var page;
var pageData = new observableModule.Observable({
    productsList: productsList
});
var productListView;

export function loaded(args: any){
  console.log("loaded event");

}
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
  productListView.on(listViewModule.ListView.itemLoadingEvent, function (args) {

    var image = args.view.getViewById("image");
    
    image.on(viewModule.View.loadedEvent, function (args: observableModule.EventData) {
      (<viewModule.View>args.object).animate({
        opacity:0,
        duration: 3000
        }).then(function () {
            return (<viewModule.View>args.object).animate({opacity: 1, duration: 2000})
          });
      });
  });

}
