const Vehicle = require('./vehicle');


//.toBeGreaterThan(0);
//toHaveProperty("time");

describe('Test vehicle methods', () => {

    test("Test Add Vehicle Functinality", () => {
        let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])
        expect(vehicle.addVehicle({ Id: 4, name: "Plane" })).toHaveLength(4);
    })

    test("Test Vehicle Find Functinality", () => {
        let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])
        expect(vehicle.getVehicle(3)).toEqual({ Id: 3, name: "Train" })

        expect(vehicle.getVehicle(3)).toHaveProperty('Id');
        expect(vehicle.getVehicle(3)).toHaveProperty('name');

        expect(vehicle.getVehicle(5)).toBeUndefined();

    })

    test("Test Vehicle delete Functinality", () => {
        let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])
        expect(vehicle.deleteVehicle(2)).toHaveLength(2);
        expect(vehicle.deleteVehicle(4)).toHaveLength(2);
        expect(vehicle.deleteVehicle(3)).toHaveLength(1);

        expect(vehicle.deleteVehicle(3).length).toBeGreaterThan(0);
        expect(vehicle.deleteVehicle(3).length).toBeGreaterThanOrEqual(1);
        expect(vehicle.deleteVehicle(3).length).toBeLessThan(2);
        expect(vehicle.deleteVehicle(3).length).toBeLessThanOrEqual(1);
    })

})

describe('Spy on add method', () => {

    let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])

    let vehicleSpy = jest.spyOn(vehicle, 'addVehicle');

    afterEach(() => {
        vehicleSpy.mockClear();
        console.log("Spy reset")
    })


    test("Test Add Vehicle Functinality", () => {

        vehicle.addVehicle({ Id: 4, name: "Plane" });
        expect(vehicleSpy).toHaveBeenCalledTimes(1);
        expect(vehicleSpy).toHaveBeenCalledWith({ Id: 4, name: "Plane" });
        expect(vehicleSpy.mock.calls[0][0]).toEqual({ Id: 4, name: "Plane" });
        expect(vehicleSpy.mock.results[0].value).toHaveLength(4)

        expect(vehicleSpy.mock.results[0].value).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    Id: expect.any(Number),
                    name: expect.any(String)
                })
            ])

        );

    })

    test("Test Add Vehicle Functinality", () => {

        vehicle.addVehicle({ Id: 4, name: "Plane" });
        expect(vehicleSpy).toHaveBeenCalledTimes(1);
        expect(vehicleSpy).toHaveBeenCalledWith({ Id: 4, name: "Plane" });
        expect(vehicleSpy.mock.calls[0][0]).toEqual({ Id: 4, name: "Plane" });
        expect(vehicleSpy.mock.results[0].value).toHaveLength(5)

    })

})

describe('Testing Callback', () => {

    let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])

    test('testing Callback function', (done) => {

        function callback(data) {
            console.log(data)
            expect(data).toHaveLength(3);
            done();
        }

        vehicle.printVehichle(callback);
    })
})

describe('Testing Mock Function', () => {
    let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])
    test('Mock function', (done) => {
        let mockFun = jest.fn();
        vehicle.printVehichle(mockFun);
        expect(mockFun).toHaveBeenCalledTimes(1);
        expect(mockFun).toHaveBeenCalledWith([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }]);
        done();
    })
})


describe('Testing Custom error', () => {
    let vehicle = new Vehicle([{ Id: 1, name: "Car" }, { Id: 2, name: "Bus" }, { Id: 3, name: "Train" }])
    
    test('Testing Rejected Promise',async ()=>{
      await expect(vehicle.testingError()).rejects.toThrow('Custom Error');
    })
})


describe('Testing String Methods',()=>{

    let string = "Hello I came back"

    test('Check string matching',()=>{
        expect(string).toMatch(/Came/i);
    })
})

describe('Testing Array Methods',()=>{
    let arr = ['Cat','Bat','Sun']
    test('Check Array Containing',()=>{
        expect(arr).not.toContain('Dog');
        expect(arr).toContain('Cat');
    })
})

describe('Testing Empty vehicle case',()=>{
    let vehicle = new Vehicle();
    test('Check Array length',()=>{
        expect(vehicle.getVehicle(1)).toBeUndefined()
    })
})

describe('testing reduce method',()=>{
    let vehicle = new Vehicle();
    test('Testing Sum Functionality',()=>{
     expect(vehicle.testingReduceMethod()).toBe(22)
    })
})

// describe('testing Private method',()=>{
//     let vehicle = new Vehicle();
//     test('Calling Private Method',()=>{
//      expect(vehicle.#testingPrivateMethod()).toBe('I am Private')
//     })
// })

