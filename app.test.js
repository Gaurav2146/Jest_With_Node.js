const Vehicle = require('./app');


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
    })

})