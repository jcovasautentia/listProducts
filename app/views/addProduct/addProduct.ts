import observableModule = require("data/observable");
import frameModule = require("ui/frame");
import ProductModel = require("../../shared/models/product");
import imageModule = require("ui/image");
import cameraModule = require("camera");

var page;
var product = new ProductModel("prueba");//TODO eliminar despues de las pruebas

export function loaded(args: any) {
  page = args.object;
  page.bindingContext = product;
  //product.image = page.getViewById("productImage");
  console.log("vista cargada " + product.name);
};

export function goToList() {
  console.log("a la lista con la info " + product.name + ", " + product.price);
  var topmost = frameModule.topmost();
  var navigationEntry = {
    moduleName: "views/listProducts/listProducts",
    context: product,
    animated: true
  }
  topmost.navigate(navigationEntry);
};

export function selectImage(args: any) {
  cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(picture => {

    product.image = new imageModule.Image();
    product.image.imageSource = picture;
    page.getViewById("productImage").imageSource = picture; 
  });
}
