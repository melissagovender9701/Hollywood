import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportService } from '../sport.service';
import { Country } from '../country';
import { Location } from '@angular/common';
import { RouterModule, Routes , Router} from '@angular/router';
import { CountrySport } from '../CountrySport';
import { Tournament } from '../tournament';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:Country[];
  country:any;
  countrySport : CountrySport;
  sportid : number;
  tournaments : any[] = [];
  constructor(private sportService:SportService, private route:ActivatedRoute, private location : Location, private router : Router) { 
    this.getCountries();
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getCountries();
    });
  }
  addTournaments(country : Country, tournament: Tournament[]){

    this.countrySport = {
      sportid : this.sportid,
      country : country,
      tournaments : tournament
    }
    this.tournaments.push(this.countrySport);

}
selectcountry(selectedcountry : Country){

  for(let i=0; i<this.tournaments.length; i++){
    if(this.tournaments[i].country.id==selectedcountry.id){
      this.tournaments.splice(i,1);
      return;
    }
  }

  this.sportService.getTournaments(this.sportid, selectedcountry.id)
  .subscribe((data : any) => {
    this.addTournaments(selectedcountry,data);
  });
console.log(selectedcountry.id);
  this.router.navigateByUrl("tournament/"+this.sportid+"/"+ this.countrytest(selectedcountry));
}
countrytest(country:any){
  return country.id;
}
  getCountries(){
    this.sportid =+ this.route.snapshot.paramMap.get('id');
    return this.sportService.getCountrySports(this.sportid).subscribe((data : any)=>{
      this.countries = data,
      console.log(this.countries);
    });
  }

}
