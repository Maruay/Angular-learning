import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'

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

  private todoList:Todo[];

  private skills:string[];

  constructor(private todoService:TodoService) {

   }

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

    // Call service
    this.todoService.getTodoList().subscribe((response) => {
        this.todoList = response;
    });
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

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
