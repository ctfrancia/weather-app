import { Component, OnInit } from '@angular/core';
// import { Country } from '../country';
import { COUNTRIES } from '../list-of-countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countryList = COUNTRIES;

  constructor() { }

  ngOnInit() {}

}
