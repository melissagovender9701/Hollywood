import { Component, OnInit } from '@angular/core';
import { SportService } from '../sport.service';
import { Sports } from '../sports';
import { Country } from '../country';
import { Observable,combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-right-side-nav',
  templateUrl: './right-side-nav.component.html',
  styleUrls: ['./right-side-nav.component.css']
})

export class RightSideNavComponent implements OnInit {

  arraySports:Sports[];
  arrayCountry: Country[];
  sports$:Observable<Sports[]>;
  filteredSports$:Observable<Sports[]>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor(private sportsService:SportService){}

  ngOnInit(): void {
    this.sportsSearch();
  }
  
  GetSports(){
    return this.sportsService.getSports().subscribe((data:any)=>{
      this.arraySports = data;
    })
  }
  GetCountrySports(id:number){
     return this.sportsService.getCountrySports(id).subscribe((data:any)=>{
      this.arrayCountry = data;
      console.log(this.arrayCountry);

    });
  }
  sportsSearch(){
    this.sports$ = this.sportsService.getSports();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredSports$ = combineLatest(this.sports$, this.filter$).pipe(
      map(([sports, filterString])=> sports.filter(sport => sport.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }


}
