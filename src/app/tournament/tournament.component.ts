import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../tournament';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  country:any;
  tournaments:Observable<Tournament[]>;
  tournamentid : number;
  arrayEvents: Event[];

  constructor(private tournamentService:SportService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.getTournament();
  }
  ngOnChanges(){
    this.getTournament();
  }
  GetTournamentEvents(id:number){
    return this.tournamentService.getEvents(id).subscribe((data:any)=>{
     this.arrayEvents = data;
     console.log(this.arrayEvents);
   });
 }
 selectcountry(selectedevent: Tournament){

  this.router.navigateByUrl("event/"+this.tournamentid+"/"+ this.tournamenttest(selectedevent));
}
tournamenttest(tournament:any){
  return tournament.id;
}
  getTournament(){
    var sportId =+this.route.snapshot.paramMap.get('sportid');
    const countryId = +this.route.snapshot.paramMap.get('countryid');
    return this.tournamentService.getTournaments(sportId,countryId).subscribe((data:any)=>{
    this.tournaments = data;
  })
  }
}
