const CarModel = require('../db/model/CarModel');
class ImageService {

    carName = "";
    grade = "";
    colour = "";
    manufactureYear = 1900;

    constructor() {

    }

    setValues(carName, grade, colour, manufactureYear) {
        this.carName = carName ? carName.toLowerCase() : '';
        this.grade = grade ? grade.toLowerCase() : '';
        this.colour = colour ? colour.toLowerCase() : '';
        this.manufactureYear = manufactureYear ? manufactureYear : 1900;
    }
    
    async getCarImages({carName, grade, colour, manufactureYear}) {

        //Ensure we have at least two parameters
        let notNullCount = 0;
        if(carName) notNullCount ++;
        if(grade) notNullCount ++;
        if(manufactureYear) notNullCount ++;
        if(colour) notNullCount ++;

        if(notNullCount < 2) {
            return Promise.reject({"error": "Not enough parameters"});
        }

        this.setValues(carName, grade, colour, manufactureYear);
        let queryObject = {};
        if(this.carName !== '') queryObject.carName = this.carName;
        if(this.grade !== '') queryObject.grade = this.grade;
        if(this.colour !== '') queryObject.colour = this.colour;
        if(this.manufactureYear !== 1900) queryObject.manufactureYear = this.manufactureYear;
        let carImageLinks = await CarModel.find(queryObject, {"link" : 1}).exec();

        return carImageLinks;  
    }

    async addCarImages(carImageLinks) {

        let cars = [];
        for (let carImageLink of carImageLinks) {
            let carImageLinkSplit = carImageLink.split('/');
            let carImageFileName = carImageLinkSplit[carImageLinkSplit.length - 1];
            carImageFileName = carImageFileName.split('.')[0]; //remove extension
            let [carName, grade, colour, manufactureYear] = carImageFileName.split('-');
            if(carName && grade && colour && manufactureYear) {
                this.setValues(carName, grade, colour, manufactureYear);
                cars.push({carName: this.carName, grade: this.grade, colour: this.colour, manufactureYear: this.manufactureYear, link: carImageLink});
            }
        }
        let res = await CarModel.insertMany(cars);
        if(res) {
            return { "success": `Inserted ${res.length} records` }
        } else {
            return Promise.reject({ "error": "Something went wrong" })
        }
    }
}

module.exports = ImageService;