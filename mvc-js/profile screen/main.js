import Model from "./model.js";
import View from "./view.js";
import Controller from "./control.js";

let model = new Model();
let view = new View();
let controller = new Controller(model, view);
controller.init();
