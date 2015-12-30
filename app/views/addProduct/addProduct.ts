import observable = require("data/observable");
import frameModule = require("ui/frame");

export function loaded() {
  console.log("vista cargada");
};

export function goToList() {
  console.log("a la lista");
  frameModule.topmost().navigate("views/listProducts/listProducts");
};

export function selectPhoto() {
  console.log("");
}
