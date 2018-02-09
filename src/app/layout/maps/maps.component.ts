import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  animations: [routerTransition()]
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  	lat: number = 51.678418;
  	lng: number = 7.809007;
  	zoom: number = 16;

}
