import TargetController from "./components/target/targeetcontroller";

class App{
    constructor(){
        this.controllers = {
            targetController: new TargetController
        }        
    }
}

window['app'] = new App()