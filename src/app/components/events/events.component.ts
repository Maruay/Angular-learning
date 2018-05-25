import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private isBlur:boolean = false;
  private isChange:boolean = false;
  private isDBLClick:boolean = false;
  private isPaste:boolean = false;
  private txtBaht:number = 22;
  private txtBox:string;
  private count:number = 0;
  private townList:Town[] = [{town: "Bangkok", country: "Thailand"}, {town: "Jakatar", country: "Indonesia"}, {town: "Tokyo", country: "Japan"}];

  constructor() { }

  ngOnInit() {
  }

}


class Town {
  town: string;
  country: string;
}
