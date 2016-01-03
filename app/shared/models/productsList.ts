import observableArrayModule = require("data/observable-array");
import Product = require("./product");

class ProductsList extends observableArrayModule.ObservableArray<Product>{
  constructor(){
    super();
  }
  add(product: Product){
     this.push(product);
  }
}

export = ProductsList;
