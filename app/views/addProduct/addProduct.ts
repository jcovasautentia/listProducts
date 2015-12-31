import observableModule = require("data/observable");
import frameModule = require("ui/frame");
import ProductModel = require("../../shared/models/product");
import imageModule = require("ui/image");
import cameraModule = require("camera");

var product = new ProductModel();
var pageData = new observableModule.Observable({
  product: product

})

export function loaded(args: any) {
  var page = args.object;
  page.bindingContext = pageData;
  console.log("vista cargada");
};

export function goToList() {
  console.log("a la lista con la info " + product.name + ", " + product.price);
  var topmost = frameModule.topmost();
  topmost.navigate({
    moduleName: "views/listProducts/listProducts",
    context: product
  });
};

export function selectImage() {
  cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(picture => {
      console.log("Result is an image source instance");
      product.image = new imageModule.Image();
      product.image = picture;
  });
}
