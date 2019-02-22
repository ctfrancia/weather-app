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

  //FIXME: resolve the context issue
  retrieveWeather() {
    console.log('COUNTRY LIST', this.countryList);

    this.theWeather = [];
    this.countryList.map((element) => {
      this.apiCall.getWeather(element.city, element.countryIso)
        .subscribe((data: {}) => {
          const celciusTemp: number = data.main.temp - 273.15;
          const celciusMin: number = data.main.temp_min - 273.15;
          const celciusMax: number = data.main.temp_max - 273.15;
          data.main.temp = celciusTemp.toPrecision(2);
          data.main.temp_min = celciusMin.toPrecision(2);
          data.main.temp_max = celciusMax.toPrecision(2);
          element.weatherInfo = data;
          console.log('DATA', data);

        });
        this.isLoading = false;
      });
      console.log('country list',this.countryList)
      this.showWeather = true;
  };

}
