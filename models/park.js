const Park = function (name, price){
    this.name = name,
    this.price = price,
    this.dinosaurs = []
}

Park.prototype.addADinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeADinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.calculateAmountofVistorsPerDay = function() {
    let total = 0

    for (const Dinosaur of this.dinosaurs) {
        total += Dinosaur.guestsAttractedPerDay;
    }
    
    return total;
};

module.exports = Park;