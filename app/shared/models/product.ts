import observableModule = require("data/observable");

class Product extends observableModule.Observable {
  name: string;
  price: number;
  image: any;//??
  constructor(name: string) {
    super();
    this.name = name;
  }
}
export = Product;
