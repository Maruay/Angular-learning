export class Employee {
    id:number;
    name:string;
    gender:string;
    contactPreference:string;
    email:string;
    dateOfBirth:Date;
    department:string;
    isActive:boolean;
    photoPath:string;
}

export interface ApiEmployee{
    page:string;
    data:ApiEmp[];
}

export interface ApiEmp{
    id:number;
    first_name:string;
    last_name:string;
    avatar:string;
}

export interface UserResponse {
    login: string;
    bio: string;
    company: string;
  }
