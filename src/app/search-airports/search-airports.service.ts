import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Country } from './../models/country.model';
import { Airports } from './../models/airports.model';

@Injectable()
export class SearchAirportsService {

  constructor(private http: Http) { }

  getJson(){
    return this.http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/`)
      .map((res: Response) => res.json());
  }
}
