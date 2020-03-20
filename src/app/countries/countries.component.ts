import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../sport.service';
import { Country } from '../country';
import { Location } from '@angular/common'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:Country[];
  constructor(private sportService:SportService, private route:ActivatedRoute, private location : Location) { 
    this.getCountries();
  }

  ngOnInit(): void {
  }

  getCountries(){
    var sportId =+ this.route.snapshot.paramMap.get('id');
    return this.sportService.getCountrySports(sportId).subscribe((data : any)=>{
      this.countries = data,
      console.log(this.countries);
    });
  }

}
