import frameModule = require("ui/frame");
import pageModule = require("ui/page");
import imageModule = require("ui/image");
import uidialogsModule = require("ui/dialogs");

import observableModule = require("data/observable");
import cameraModule = require("camera");

import ProductModel = require("../../shared/models/product");

var page;
var product = new ProductModel();
var imageView;
var anim;

export function loaded(args: any) {
    page = args.object;
    page.bindingContext = product;
    imageView = <imageModule.Image>page.getViewById("productImage");

    console.log("addProduct view loaded");

}

export function animateImage() {
    imageView.animate({
        opacity: 0,
        duration: 3000
    }).then(function() {
        return imageView.animate({ opacity: 1, duration: 2000 });
    });
}

export function goToList() {

  if (isNaN(product.price)) {
    uidialogsModule.alert("Introduce un precio valido");
  }
  else{
    console.log("a la lista con la info " + product.name + ", " + product.price);
    var topmost = frameModule.topmost();
    var navigationEntry = {
        moduleName: "views/listProducts/listProducts",
        context: product,
        animated: true
    }
    topmost.navigate(navigationEntry);
  }
}

export function selectImage(args: any) {
    cameraModule.takePicture({ width: 300, height: 300, keepAspectRatio: true }).then(pictureSource => {
        product.image = pictureSource;
        imageView.imageSource = pictureSource;//por que es necesario?? quizas esta acción no sucede
        // en la vista sino en la camara y por tanto no funciona el "two-way binding"
    });
};
