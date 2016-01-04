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

export function pageNavigatedTo(args: observableModule.EventData) {

  page = <pages.Page>args.object;
  page.bindingContext = pageData;
  var d = new Date();
  var product = new productModel(page.navigationContext.name);
  product.price = page.navigationContext.price;
  product.image = page.navigationContext.image;

//   image.animate({
//     translate: { x: 100, y: 100},
//     duration: 3000
// });
  productsList.push(product);

  }
