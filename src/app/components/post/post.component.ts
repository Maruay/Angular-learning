import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ApiEmployee } from '../../models/employee'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private postList:post[];
  private itemSelected:string;
  private apiPostList:ApiEmployee;
  private test:string;
  private forName:string = "";
  private foreachName:string = "";
  private forOfName:string = "";

  constructor(private postService:PostService) { }

  ngOnInit() {

    this.postService.getPostList().subscribe((response)=>{
      this.postList = response;
    });

    this.postService.getPostList2().subscribe((response)=>{
      this.apiPostList = response;
      for(let i = 0; i<= response.data.length-1;i++){
        this.forName += response.data[i].first_name + " ";
      }

      response.data.forEach(x => {
        this.foreachName += x.first_name + " " + x.last_name + " ";
      });

      for (var value of response.data){
        this.forOfName +=  value.first_name + " " + value.last_name + " ";
      }
    })
    //this.apiPostList = this.postService.getPostList2();
    //this.postService.getPostList2();


  } 
  
  selectItem(item){
    this.itemSelected = item;
  }
}

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
