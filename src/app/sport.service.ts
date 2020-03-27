import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sports } from './sports';
import { Country } from './country';
import { Tournament } from './tournament';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  
  // private sportUrl = 'assets/sport.json';
  private sportUrl = 'https://localhost:44394/api/sports';
  private countrySportsUrl = 'https://localhost:44394/api/country?';
  private tournaments = 'https://localhost:44394/api/tournament?';
  private events = 'https://localhost:44394/api/event?'
  private sport = 'id=';
  private country = 'countryId=';
  private tournament = 'tournamentId='
  constructor(private http:HttpClient) { }

  getSports():Observable<Sports[]>
  {
    return this.http.get<Sports[]>(this.sportUrl);
  }
  getCountrySports(id:number):Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countrySportsUrl+this.sport+id);
  }
  getTournaments(id:number,countryId:number):Observable<Tournament[]>
  {
     return this.http.get<Tournament[]>(this.tournaments + this.sport + id + "&" + this.country + countryId);
  }
  getEvents(tournamentId:number){
      return this.http.get<Event[]>(this.events + this.tournament +tournamentId);
  }
  
}
