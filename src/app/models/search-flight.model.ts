export class SearchFlight{
    from:string
    to:string
    dateFrom:string
    dateTo:string
    price:number

    constructor(
        from,
        to,
        dateFrom,
        dateTo,
        price
    ){
        this.from = from,
        this.to = to,
        this.dateFrom = dateFrom,
        this.dateTo = dateTo,
        this.price = price       
    }
}