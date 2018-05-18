import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  
  // Dictionary
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }

  private skills:string[];

  constructor() { }

  ngOnInit() {
    this.name = "Maruay";
    this.age = 25;
    this.email = "maruay.wk@gmail.com";

    this.address = {
      street: "94 Sutthisan Road",
      city: "Din Daeng",
      province: "Bangkok",
      postcode: "10400"
    }

    this.skills = ["Programming", "Database", "Language"];
  }

  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill){
    this.skills.forEach((element, index) => {
      if (element == skill){
        this.skills.splice(index, 1);
      }
    });
  }

}
