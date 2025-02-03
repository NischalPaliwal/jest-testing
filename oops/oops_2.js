class flight {
    constructor(flightName, flightNo, departure, arrival) {
        this.flightName = flightName;
        this.flightNo = flightNo;
        this.departure = departure;
        this.arrival = arrival
    }

    printDetails = () => {
        console.log(this.flightName);
        console.log(this.flightNo);
        console.log(this.departure);
        console.log(this.arrival);
    }
}

const flight1 = new flight("Airbus-23AS", "23bc", "today", "tommorow");
const flight2 = new flight("Boeing-747", "24bc", "today", "today");

console.log(flight1 instanceof flight);
console.log(flight2 instanceof flight);

flight1.printDetails();
flight2.printDetails();