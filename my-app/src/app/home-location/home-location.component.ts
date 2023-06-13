import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrls: ['./home-location.component.css']
})
export class HomeLocationComponent implements OnInit {

  @Input() housingLocationInChild!: Housinglocation;


  constructor() { }

  ngOnInit(): void {
  }

}
