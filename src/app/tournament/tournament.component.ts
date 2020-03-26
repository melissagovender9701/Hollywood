import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../tournament';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  country:any;
  tournaments:Observable<Tournament[]>;
  constructor(private tournamentService:SportService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTournament();
  }
  ngOnChanges(){
    this.getTournament();
  }

  getTournament(){
    var sportId =+this.route.snapshot.paramMap.get('sportid');
    const countryId = +this.route.snapshot.paramMap.get('countryid');
    return this.tournamentService.getTournaments(sportId,countryId).subscribe((data:any)=>{
    this.tournaments = data;
  })
  }
}
