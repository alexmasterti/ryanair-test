import { HomeComponent } from './home/home.component';


import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAirportsComponent } from './search-airports/search-airports.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {path: 'search/airports', component: SearchAirportsComponent},
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}