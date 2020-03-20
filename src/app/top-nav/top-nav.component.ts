import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  today: number = Date.now();

  constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
   }

  ngOnInit(): void {
  }

}
