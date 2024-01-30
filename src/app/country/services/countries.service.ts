import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Region, SmallContries } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private baseUrl: string = 'https://restcountries.com/v3.1';
    private _regions: Region[] = [
        Region.Africa,
        Region.Americas,
        Region.Asia,
        Region.Europe,
        Region.Oceania
    ];
    
    constructor( private _http: HttpClient ) { }

    get regions(): Region[] {
        return [ ...this._regions ];
    }

    getConutriesByRegion( region: Region ): Observable<SmallContries[]> {
        
        if( !region ) return of ([]);

        const url: string = `${ this.baseUrl }/region/${ region }?fields=name,cca3,borders`;

        return this._http.get<SmallContries[]>( url );
        // return [];
    }
    
}