import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'
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
    const options = new RequestOptions({
        params: { page:2 }
    });
    return this.http.get("https://reqres.in/api/users", options).pipe(map((res)=>res.json()));
  }
}