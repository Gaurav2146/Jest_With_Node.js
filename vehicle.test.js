const Vehicle = require('./vehicle');


//.toBeGreaterThan(0);
//toHaveProperty("time");

describe('Test vehicle methods',()=>{

    test("Test Add Vehicle Functinality",()=>{
        let vehicle = new Vehicle([{Id:1,name:"Car"},{Id:2,name:"Bus"},{Id:3,name:"Train"}])
        expect(vehicle.addVehicle({Id:4,name:"Plane"})).toHaveLength(4);
    })

    test("Test Vehicle Find Functinality",()=>{
        let vehicle = new Vehicle([{Id:1,name:"Car"},{Id:2,name:"Bus"},{Id:3,name:"Train"}])
        expect(vehicle.getVehicle(3)).toEqual({Id:3,name:"Train"})
    })

    test("Test Vehicle delete Functinality",()=>{
        let vehicle = new Vehicle([{Id:1,name:"Car"},{Id:2,name:"Bus"},{Id:3,name:"Train"}])
        expect(vehicle.deleteVehicle(2)).toHaveLength(2);
        expect(vehicle.deleteVehicle(4)).toHaveLength(2);
        expect(vehicle.deleteVehicle(3)).toHaveLength(1);

        expect(vehicle.deleteVehicle(3).length).toBeGreaterThan(0);
        expect(vehicle.deleteVehicle(3).length).toBeGreaterThanOrEqual(1);
        expect(vehicle.deleteVehicle(3).length).toBeLessThan(2);
        expect(vehicle.deleteVehicle(3).length).toBeLessThanOrEqual(1);
    })

})