import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../sport.service';
import { Country } from '../country';
import { Location } from '@angular/common';
import { RouterModule, Routes , Router} from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:Country[];
  country:any;
  sportid : number;
  constructor(private sportService:SportService, private route:ActivatedRoute, private location : Location, private router : Router) { 
    this.getCountries();
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getCountries();
    });
  }

  getCountries(){
    var sportId =+ this.route.snapshot.paramMap.get('id');
    return this.sportService.getCountrySports(sportId).subscribe((data : any)=>{
      this.countries = data,
      console.log(this.countries);
    });
  }
  selectcountry(countryid : number){
    var sportId =+ this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl("tournament/"+this.sportid+"/"+countryid);
  }

}
