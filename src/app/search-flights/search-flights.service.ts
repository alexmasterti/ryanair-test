import { SearchFlight } from './../models/search-flight.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchFlightsService {

  constructor(private http: Http) { }

  getFlights(obj:SearchFlight){
    console.log(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${obj.from}/to/${obj.to}/${obj.dateFrom}/${obj.dateTo}/${obj.price}/unique/?limit=15&offset-0`);
    return this.http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${obj.from}/to/${obj.to}/${obj.dateFrom}/${obj.dateTo}/${obj.price}/unique/?limit=15&offset-0`)
      .map((res: Response) => res.json());
  }

}
