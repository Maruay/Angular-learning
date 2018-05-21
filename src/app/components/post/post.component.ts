import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private postList:post[];
  private itemSelected:string;
  constructor(private postService:PostService) { }

  ngOnInit() {

    this.postService.getPostList().subscribe((response)=>{
      this.postList = response;
    });
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
