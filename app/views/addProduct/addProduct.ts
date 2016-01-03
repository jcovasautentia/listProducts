import observableModule = require("data/observable");
import frameModule = require("ui/frame");
import ProductModel = require("../../shared/models/product");
import imageModule = require("ui/image");
import cameraModule = require("camera");

var product = new ProductModel("prueba");

export function loaded(args: any) {
  var page = args.object;
  page.bindingContext = product;
  product.image = page.getViewById("productImage");
  console.log("vista cargada " + product.name);
};

export function goToList() {
  console.log("a la lista con la info " + product.name + ", " + product.price);
  var topmost = frameModule.topmost();
  topmost.navigate({
    moduleName: "views/listProducts/listProducts",
    context: product
  });
};

export function selectImage(args: any) {
  cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(picture => {

      product.image.imageSource = picture;
  });
}
