export class Flight{
    dateFrom:Date
    dateTo:Date
    currency:string
    price:number

    constructor(
        dateFrom,
        dateTo,
        currency,
        price
    ){
        this.dateFrom = dateFrom,
        this.dateTo = dateTo,
        this.currency = currency,
        this.price = price       
    }
}