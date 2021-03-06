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
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
{path:"", component:HomeComponent},
{path:"user",component:UserComponent},
{path:"about", component:AboutusComponent},
{path:"post", component:PostComponent},
{path:"events", component:EventsComponent},
{path:"employees",component:EmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    PostComponent,
    HomeComponent,
    EventsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    PostService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
