import TargetService from "./TargetService.js";

let _targetService = new TargetService()

export default class TargetController{
attack(type){
    return _targetService.attack(type)
}
    constructor(){
        console.log('TargetController says hi')
    }
}