import { Component, OnInit } from '@angular/core';
import { SoccerService } from '../soccer.service';
import { Soccer } from '../soccer';
import { BetslipService} from '../betslip.service';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  arraySoccer:Soccer[];

  constructor(private soccerService:SoccerService, private betslipService:BetslipService) { }

  ngOnInit(): void {
    this.getSoccerFixtures();
  }
  getSoccerFixtures(){
    return this.soccerService.getSoccerFixtures().subscribe((data:any)=>{
      this.arraySoccer = data;
    })
  }
  addEventToBetSlip(event:any,punterChoice:string,odds:number){
    this.betslipService.addToBetSlip(event,punterChoice,odds);
  }
}
