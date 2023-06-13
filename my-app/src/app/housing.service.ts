import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocations : Housinglocation [] = [
    
    {
      id:100,
      name:"Test Home",
      city:"Mangalore",
      state:'Karnataka',
      photo:'assets/Attractive-Small-home-design-.jpeg',
      availableUnits:80,
      wifi:true,
      laudry:false
    },
    
    {
      id:200,
      name:"Sweet Home",
      city:"Bangalore",
      state:'Karnataka',
      photo:'assets/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
      availableUnits:80,
      wifi:true,
      laudry:false
    },
  
    {
      id:200,
      name:"Sweet Home2",
      city:"Bangalore",
      state:'Karnataka',
      photo:'assets/Attractive-Small-home-design-.jpeg',
      availableUnits:80,
      wifi:true,
      laudry:false
    },
  
    {
      id:200,
      name:"Sweet Home3",
      city:"Bangalore",
      state:'Karnataka',
      photo:'assets/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
      availableUnits:80,
      wifi:true,
      laudry:false
    },
  
  ];

  getAllHousingLocations():Housinglocation[] {
    return this.housingLocations;
  };

  constructor() { }


}


