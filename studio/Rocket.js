"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKG) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKG;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i in items) {
            total += items[i].massKg;
        }
        // console.log("sumMass");
        // console.log(total);
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        var astroAndCargoTotal = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        // console.log("currentMassKg")
        // console.log(astroAndCargoTotal)
        return astroAndCargoTotal;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            // console.log("canAdd done and true")
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            // console.log("addCargo")
            // console.log(cargo)
            return true;
        }
        else {
            // console.log("addCargo false")
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            // console.log("addAstronaut")
            // console.log(astronaut)
            return true;
        }
        else {
            // console.log("addAstronaut false")
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
