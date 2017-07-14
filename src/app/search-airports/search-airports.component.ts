import { Component, OnInit, OnDestroy, Injectable, Input } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

import { Airports } from './../models/airports.model';
import { SearchAirportsService } from './search-airports.service';
import { SearchFlight } from './../models/search-flight.model';
import { Country } from './../models/country.model';
import { Flight } from './../models/flight.model';
import { SearchFlightsService } from './../search-flights/search-flights.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-airports',
  templateUrl: './search-airports.component.html',
  styleUrls: ['./search-airports.component.css'],
  providers: [SearchAirportsService, SearchFlightsService]
})

export class SearchAirportsComponent implements OnInit {
  from: string = null;
  to: string = null;
  msg: string = "";
  @Input() showMsg: boolean = false;
  
  dataService: CompleterData = null;
  airportsConverterd = [];
  flights: Flight [] = [];
  search: SearchFlight = new SearchFlight(null, null, null, null, null);

  constructor(
    private searchAirportsService: SearchAirportsService, 
    private searchFlightsService: SearchFlightsService,
    private completerService: CompleterService) { 
  }
  ngOnInit() {   
    this.searchAirportsService.getJson()
      .subscribe(
        res => {
            this.onAutoComplete(res.airports)
          }
      )
  }
  onAutoComplete(airports: Airports []){  
    this.dataService = this.completerService.local(this.convertAirports(airports),  'name', 'name');
  } 
  
  convertAirports(airports: Airports []){
    var temp:string;
    for (let airport of airports) {
        temp = airport.country.name +' - '+ airport.name +' ('+ airport.iataCode +') ';
        this.airportsConverterd.push({name:temp, value:airport.iataCode });
    }    
      
    return this.airportsConverterd;
  }
  onSubmit(form, from, to){
    this.instacedSeachFlight(form, from, to);
    this.getFlights();
  }

  getFlights(){
    this.showMsg = true;
    this.msg = "Loading ...";
    this.searchFlightsService.getFlights(this.search)
      .subscribe(res => {
        this.flights = res.flights;
        if(res.flights.length > 0){
          this.showMsg = false;
          this.msg = "";
        }else{
          this.showMsg = true;
          this.msg = "No flights found";          
        }      
      },
      (error: any) => {
          this.showMsg = true;
          this.msg = "Error !";          
      } 
    );
  }

  instacedSeachFlight(form, from, to){ 
    this.search.from = this.getIataCode(from.value);
    this.search.to = this.getIataCode(to.value);    
    this.search.dateFrom = form.controls.Depart.value;
    this.search.dateTo = form.controls.Return.value;    
    this.search.price = form.controls.Price.value;
  }

  getIataCode(input: string){
    return input.split('(')[1].split(')')[0];
  }

  validTouched(campo){
    return !campo.valid && campo.touched;
  }

  validAirport(from, to){
    return (from.value === to.value);
  }  

  applyCssError(campo){
    return {
      'has-error': this.validTouched(campo),
      'has-feedback': this.validTouched(campo)
    }
  }  
}
