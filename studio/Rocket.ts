import { Cargo } from './Cargo'
import { Astronaut } from './Astronaut'
import { Payload } from './Payload'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []
    astronauts: Astronaut[] = []
    constructor(name: string, totalCapacityKG: number, ) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKG;
    }

    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let i in items) {
            total += items[i].massKg
        }
        // console.log("sumMass");
        // console.log(total);
        return total;
    }


    currentMassKg(): number {
        let astroAndCargoTotal: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        // console.log("currentMassKg")
        // console.log(astroAndCargoTotal)
        return astroAndCargoTotal
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            // console.log("canAdd done and true")
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            // console.log("addCargo")
            // console.log(cargo)
            return true;
        }
        else {
            // console.log("addCargo false")
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
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


    }
}
