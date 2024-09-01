import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

    public country?: Country;
  constructor( 
    private activatedRoute:ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,

  ){}
  ngOnInit(): void {  
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByAlphacode(id))
    )
    .subscribe((country) => {
      if(!country) return this.router.navigateByUrl('');
      console.log("Tenemos Pais: "+country)
      return this.country = country;
      //return
      //comenatarizado por el pipe de arriba, pero sin el pipe funciona cheque
      //this.searchCountry(id);
      // console.log({ params: id });
    })
  }
  searchCountry(code:string){
    this.countriesService.searchCountryByAlphacode(code).subscribe(country => {
      console.log(country);
    });
  }

}
