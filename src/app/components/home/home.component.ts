import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('arrItem',[
      transition('* => *', [
        query(':enter',style({opacity:0}),{optional: true}),

        query(':enter',stagger('300ms', [
          animate('.6s ease-in',keyframes([
            style({opacity:0, transform:'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform:'translateY(35px)', offset: .3}),
            style({opacity:1, transform:'translateY(0)', offset: 1})
          ]))]),{optional: true}),
          
        query(':leave',stagger('300ms', [
          animate('.6s ease-in',keyframes([
            style({opacity:0, transform:'translateY(0)', offset: 0}),
            style({opacity:.5, transform:'translateY(35px)', offset: .3}),
            style({opacity:1, transform:'translateY(-75%)', offset: 1})
          ]))]),{optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  private itemCount:number;
  private itemText:string;
  arrItem = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.arrItem.length;
  }

  addItemText(){
    this.arrItem.push(this.itemText);
    this.itemText = "";
    this.itemCount = this.arrItem.length;
  }

  removeItem(i){
    this.arrItem.splice(i ,1);
    this.itemCount = this.arrItem.length;
  }
}
