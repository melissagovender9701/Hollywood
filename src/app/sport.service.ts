import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sports } from './sports';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  
  // private sportUrl = 'assets/sport.json';
  private sportUrl = 'https://localhost:44394/api/sports';
  private countrySportsUrl = 'https://localhost:44394/api/country';
  constructor(private http:HttpClient) { }

  getSports():Observable<Sports[]>
  {
    return this.http.get<Sports[]>(this.sportUrl);
  }
  getCountrySports(id:number):Observable<Country[]>
  {
    console.log('ahhh');
    return this.http.get<Country[]>(this.countrySportsUrl+"?id="+id);
    
  }
}
