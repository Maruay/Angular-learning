import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { TodoService } from './services/todo.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';

const appRoutes:Routes = [
{path:"", component:UserComponent},
{path:"about", component:AboutusComponent},
{path:"post", component:PostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
