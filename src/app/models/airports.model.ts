import { Country } from './country.model';
export class Airports {
    iataCode:string
    name:string
    base:boolean
    latitude:number
    longitude:number
    country:Country

    constructor(
        iataCode,
        name,
        base,
        latitude,
        longitude,
        country        
    ){
        this.iataCode = iataCode,
        this.name = name,
        this.base = base,
        this.latitude = latitude,
        this.longitude = longitude,
        this.country = country          
    }
}