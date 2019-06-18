import Target from "../../models/target.js";

let _target = new Target()

export default class TargetService{
    attack(type){
        _target.health -= _target.attacks[type]
    }

get Target(){
    return _target
}
constructor(){
    console.log('TService says hi')
}
}