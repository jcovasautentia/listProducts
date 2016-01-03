import observableModule = require("data/observable");
import list = require("../../shared/globalList");

export function loaded(args: any){
  console.log("loaded");
  var page = args.object;
  page.bindingContext = list;


}
export function pageNavigatedTo(args: observableModule.EventData) {
  console.log("---> " + args.object.name);
  list.push(args.object);
  }
