import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soccer } from './soccer';
@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private soccerUrl = '/assets/soccer.json';

  constructor(private http:HttpClient) { }

  getSoccerFixtures():Observable<Soccer[]>
  {
    return this.http.get<Soccer[]>(this.soccerUrl);
  }
}
