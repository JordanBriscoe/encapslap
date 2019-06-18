export default class Target{
    constructor(){
        this.name = "Target",
        this.health = 100,
        this.attacks = {
            punch: 5,
            kick: 10,
            uppercut: 15
        }
        this.items = [],
        this.hits = 0
    }
}