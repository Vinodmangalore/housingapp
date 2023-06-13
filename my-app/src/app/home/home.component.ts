import { Component, inject, OnInit } from '@angular/core';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // 1. Consumes the method of Housing Service, 2. store in the local variable

  housingLocationList: Housinglocation[];
  housingService:HousingService = inject(HousingService);
  


  constructor() {
     this.housingLocationList = this.housingService.getAllHousingLocations();
   }

  ngOnInit(): void {

  }

}
