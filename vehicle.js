class Vehicle{

    #VehiclesAvailable;

    constructor(Vehicles=[]){
        this.#VehiclesAvailable = Vehicles;
    }

    getVehicle(Id)
    {
       return this.#VehiclesAvailable.find(vehicle=>vehicle.Id === Id);
    }

    addVehicle(vehicle)
    {
        this.#VehiclesAvailable.push(vehicle);
        return this.#VehiclesAvailable;
    }

    deleteVehicle(Id)
    {
        this.#VehiclesAvailable = this.#VehiclesAvailable.filter(vehicle=>vehicle.Id !== Id);
        return this.#VehiclesAvailable;
    }

    printVehichle(printFunction)
    {
        printFunction( this.#VehiclesAvailable);
    }

    testingError()
    {
        return Promise.reject(new Error('Custom Error'))
    }

    testingReduceMethod()
    {
        this.#testingPrivateMethod();

        let arr = [1,2,3,4,5,6];
        return arr.reduce((acc,curr)=>{
            return acc = acc + curr;
        },1)
    }

    #testingPrivateMethod()
    {
        console.log("I am Private");
    }

}

module.exports=Vehicle