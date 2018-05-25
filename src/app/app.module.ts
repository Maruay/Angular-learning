import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { TodoService } from './services/todo.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';

const appRoutes:Routes = [
{path:"", component:HomeComponent},
{path:"user",component:UserComponent},
{path:"about", component:AboutusComponent},
{path:"post", component:PostComponent},
{path:"events", component:EventsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    PostComponent,
    HomeComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
