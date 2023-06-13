import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //Extract the incoming id from route and display
  route:ActivatedRoute = inject(ActivatedRoute);
  id:number = 0;
  private subscription: Subscription[] = [];


  constructor() { 
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
