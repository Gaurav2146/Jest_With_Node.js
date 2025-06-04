class Vehicle{

    constructor(Vehicles=[]){
        this.VehiclesAvailable = Vehicles;
    }

    getVehicle(Id)
    {
       return this.VehiclesAvailable.find(vehicle=>vehicle.Id === Id);
    }

    addVehicle(vehicle)
    {
        this.VehiclesAvailable.push(vehicle);
        return this.VehiclesAvailable;
    }

    deleteVehicle(Id)
    {
        this.VehiclesAvailable = this.VehiclesAvailable.filter(vehicle=>vehicle.Id !== Id);
        return this.VehiclesAvailable;
    }

    printVehichle(printFunction)
    {
        printFunction( this.VehiclesAvailable);
    }

}

module.exports=Vehicle