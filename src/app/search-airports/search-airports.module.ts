import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchAirportsComponent } from './search-airports.component';
import { SearchAirportsService } from './search-airports.service';
import { SearchFlightsService } from './../search-flights/search-flights.service';
import { ErrorControlFieldComponent } from './../error-control-field/error-control-field.component';
import { Ng2CompleterModule } from "ng2-completer";
import { DataTableModule } from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2CompleterModule,
    DataTableModule
  ],
  declarations: [
    SearchAirportsComponent,
    ErrorControlFieldComponent
  ],
  exports: [
    SearchAirportsComponent,
    ErrorControlFieldComponent
  ],
  providers: [SearchAirportsService, SearchFlightsService]
})
export class SearchAirportsModule { }
