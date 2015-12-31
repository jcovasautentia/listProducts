import observableModule = require("data/observable");
import arrayObservableModule = require("data/observable-array");


export function pageNavigatedTo(args: observableModule.EventData) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = page.navigationContext;
  }
