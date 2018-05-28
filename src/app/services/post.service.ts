import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ApiEmployee } from '../models/employee'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:Http, private httpClient:HttpClient) { }

  getPostList(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map((res)=>res.json()));
  }

  getPostList2(){
    this.httpClient.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    });
  //   var stringUrl = "https://api.github.com/users/seeschweiler"; //"https://reqres.in/api/users?page=2";
  //   var ret:UserResponse; //:ApiEmployee;
  //   this.httpClient.get<UserResponse>(stringUrl).subscribe(data => {
  //     ret = data;
  //   });
  //   return ret;
   }
}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
