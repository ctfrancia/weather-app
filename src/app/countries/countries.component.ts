import { Component, OnInit } from '@angular/core';
// import { Country } from '../country';
import { COUNTRIES } from '../list-of-countries';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  theWeather:any = [];
  countryList = COUNTRIES;
  isLoading: boolean = true;
  showWeather: boolean = false;

  constructor(private apiCall:ApiService) { }


  ngOnInit() {
    this.retrieveWeather()
  };

  retrieveWeather() {
    console.log('COUNTRY LIST', this.countryList);

    this.theWeather = [];
    this.countryList.map((element, i) => {
      this.apiCall.getWeather(element.city, element.countryIso)
        .subscribe((data: {}) => {
          element.weatherInfo = data;
        });
        this.isLoading = false;
      });
      console.log('country list',this.countryList)
      this.showWeather = true;
  };

}
