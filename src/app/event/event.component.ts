import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SportService } from '../sport.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  tournament:any;
  event: Observable<Event[]>;
  constructor(private eventService:SportService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getTournament(){
    var tournamentId =+this.route.snapshot.paramMap.get('tournamentId');
    return this.eventService.getEvents(tournamentId).subscribe((data:any)=>{
    this.event = data;
  })
  }
}
