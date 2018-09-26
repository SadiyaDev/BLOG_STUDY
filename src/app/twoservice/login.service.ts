import {Component, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginComponent implements OnInit {
  users=[];
  //injecting the service
  constructor(private router:Router, private _userservice:UserService) {
    console.log("login constructor");
    
   
   }
   ngOnInit() {
   //Subscribing the service
   console.log("login ngOnit");
   this._userservice.getUsers()
   .subscribe(resEmployeeData => this.users = resEmployeeData);
   console.log(this.users.length);
  
  
  }

  //matches the data with the json data
  matchData(value){
    console.log(" function");
    for(let i=0 ; i<this.users.length; i++)
    {      console.log("value",value);
    if(value==this.users[i].name){
        console.log("ename...",value);
        console.log("username",this.users[i].name);
        return this.users[i];
      }
      else if(value==this.users[i+1].name){
        return this.users[i+1];
      }else if(value==this.users[i+2].name){
        return this.users[i+2];
      }else if(value==this.users[i+3].name){
        return this.users[i+3];
      }else if(value==this.users[i+4].name){
        return this.users[i+4];
      
}
    }    
}

}
