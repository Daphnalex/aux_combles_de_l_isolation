import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat: number = 48.286518;
  public long: number = 1.1526260000000548;

  constructor() { }

  ngOnInit() {
  }

}
