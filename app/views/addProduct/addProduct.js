"use strict";
var frameModule = require("ui/frame");
function loaded() {
    console.log("vista cargada");
}
exports.loaded = loaded;
;
function goToList() {
    console.log("a la lista");
    frameModule.topmost().navigate("views/listProducts/listProducts");
}
exports.goToList = goToList;
;
function selectPhoto() {
    console.log("");
}
exports.selectPhoto = selectPhoto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZFByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU8sV0FBVyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBRXpDO0lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRmUsY0FBTSxTQUVyQixDQUFBO0FBQUEsQ0FBQztBQUVGO0lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUhlLGdCQUFRLFdBR3ZCLENBQUE7QUFBQSxDQUFDO0FBRUY7SUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFGZSxtQkFBVyxjQUUxQixDQUFBIn0=