import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from '../sign-up/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }
}
